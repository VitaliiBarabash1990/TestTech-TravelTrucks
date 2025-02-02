import { useDispatch, useSelector } from "react-redux";
import CamperCard from "../CamperCard/CamperCard.jsx";
import css from "./CampersList.module.css";
import {
	selectCampers,
	selectFavoriteCampers,
	selectIsLoading,
	selectNumberOfCampers,
} from "../../redux/campers/selectors.js";
import { setFavoriteCampers } from "../../redux/campers/slice.js";
import Loader from "../Loader/Loader.jsx";
import LoadMore from "../LoadMore/LoadMore.jsx";

const CampersList = ({ loadMoreHandler }) => {
	const dispatch = useDispatch();

	const campers = useSelector(selectCampers);
	const favoriteCampers = useSelector(selectFavoriteCampers);
	const loading = useSelector(selectIsLoading);
	const totalCampers = useSelector(selectNumberOfCampers);

	const setFavoriteHandler = (id) => {
		dispatch(setFavoriteCampers(id));
	};

	const uniqueCampers = campers.filter(
		(camper, index, self) => index === self.findIndex((c) => c.id === camper.id)
	);

	const clickLoadMore =
		campers.length < totalCampers && campers.length > 0 && !loading;

	return (
		campers && (
			<div className={css.groupCamperListAndLoadMore}>
				<ul className={css.campersList}>
					{uniqueCampers.map((camper) => (
						<li key={camper.id} className={css.listItem}>
							<CamperCard
								camperData={camper}
								favoriteCampers={favoriteCampers}
								setFavoriteHandler={setFavoriteHandler}
							/>
						</li>
					))}
				</ul>
				{loading && <Loader />}
				{clickLoadMore && <LoadMore loadMoreHandler={loadMoreHandler} />}
			</div>
		)
	);
};

export default CampersList;
