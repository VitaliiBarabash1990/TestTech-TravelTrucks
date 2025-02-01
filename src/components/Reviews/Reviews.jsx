import { useSelector } from "react-redux";
import { selectChoosenCamper } from "../../redux/campers/selectors.js";
import Commentars from "../Commentars/Commentars.jsx";
import css from "./Reviews.module.css";

const Reviews = () => {
	const { reviews } = useSelector(selectChoosenCamper);
	return (
		<div className={css.reviews}>
			<ul className={css.listOfComments}>
				{reviews.map((review, index) => (
					<li key={index} className={css.comment}>
						<Commentars review={review} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Reviews;
