import css from "./RatingAndLocation.module.css";

const RatingAndLocation = ({ rating, reviews, location }) => {
	return (
		<div className={css.groupRatingAndLocation}>
			<div className={css.groupRating}>
				<svg width={16} height={16} fill="#ffc531">
					<use href="/symbol-defs.svg#icon-rating"></use>
				</svg>
				<p className={css.rating}>{`${rating}(${reviews.length} reviews) `}</p>
			</div>
			<div className={css.groupLocation}>
				<svg width={16} height={16} fill="#101828">
					<use href="/symbol-defs.svg#icon-map"></use>
				</svg>
				<p className={css.rating}>{location.split(",").reverse().join(", ")}</p>
			</div>
		</div>
	);
};

export default RatingAndLocation;
