import Commentars from "../Commentars/Commentars.jsx";
import css from "./Reviews.module.css";

const Reviews = () => {
	return (
		<div className={css.reviews}>
			<ul className={css.listOfComments}>
				{[].map((review, index) => (
					<li key={index} className={css.comment}>
						<Commentars review={review} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Reviews;
