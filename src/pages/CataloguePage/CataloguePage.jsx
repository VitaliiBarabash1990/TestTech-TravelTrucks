import CampersList from "../../components/CampersList/CampersList.jsx";
import Filters from "../../components/Filters/Filters.jsx";
import css from "./CataloguePage.module.css";

const CataloguePage = () => {
	return (
		<div className={css.cataloguePage}>
			<div className={css.catalogueFilter}>
				<Filters />
			</div>

			<div className={css.catalogueResults}>
				<CampersList />
			</div>
		</div>
	);
};

export default CataloguePage;
