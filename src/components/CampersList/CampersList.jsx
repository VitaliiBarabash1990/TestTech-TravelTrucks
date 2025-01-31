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

const CampersList = ({ loadMoreHandler }) => {
	const dispatch = useDispatch();

	const campers = useSelector(selectCampers);
	const favoriteCampers = useSelector(selectFavoriteCampers);
	const totalCampers = useSelector(selectNumberOfCampers);
	const loading = useSelector(selectIsLoading);

	const setFavoriteHandler = (id) => {
		dispatch(setFavoriteCampers(id));
	};

	return (
		<div className={css.groupCamperListAndLoadMore}>
			<ul className={css.campersList}>
				{campers.map((camper) => (
					<li key={camper.id} className={css.listItem}>
						<CamperCard
							camperData={camper}
							favoriteCampers={favoriteCampers}
							setFavoriteHandler={setFavoriteHandler}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CampersList;
