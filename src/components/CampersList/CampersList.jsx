import CamperCard from "../CamperCard/CamperCard.jsx";
import css from "./CampersList.module.css";

const CampersList = () => {
	return (
		<div className={css.groupCamperListAndLoadMore}>
			<ul className={css.campersList}>
				{[].map((camper) => (
					<li key={camper.id} className={css.listItem}>
						<CamperCard />
					</li>
				))}
			</ul>
		</div>
	);
};

export default CampersList;
