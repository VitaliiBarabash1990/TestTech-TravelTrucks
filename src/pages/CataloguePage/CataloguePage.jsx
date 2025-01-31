import { useDispatch, useSelector } from "react-redux";
import CampersList from "../../components/CampersList/CampersList.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import css from "./CataloguePage.module.css";
import {
	selectCurrentPage,
	selectFilters,
} from "../../redux/campers/selectors.js";
import { useEffect } from "react";
import { getAllCampers } from "../../redux/campers/operations.js";
import { setCurrentPage } from "../../redux/campers/slice.js";

const CataloguePage = () => {
	const dispatch = useDispatch();
	const filters = useSelector(selectFilters);
	const currentPage = useSelector(selectCurrentPage);

	useEffect(() => {
		const params = { ...filters, limit: 4, page: currentPage };
		dispatch(getAllCampers(params));
	}, [currentPage, dispatch, filters]);

	const loadMoreHandler = () => {
		const newPage = currentPage + 1;
		dispatch(setCurrentPage(newPage));
	};

	return (
		<div className={css.cataloguePage}>
			<div className={css.catalogueFilter}>
				<Filters />
			</div>

			<div className={css.catalogueResults}>
				<CampersList loadMoreHandler={loadMoreHandler} />
			</div>
		</div>
	);
};

export default CataloguePage;
