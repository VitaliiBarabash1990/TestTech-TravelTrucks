import css from "./Commentars.module.css";

const Commentars = ({ review }) => {
	const numberOfStars = 5;

	const stars = Array.from({ length: numberOfStars }, (_, index) => (
		<svg
			key={index}
			width={16}
			height={16}
			fill={index < review.reviewer_rating ? "var(--rating)" : "var(--badges)"}
		>
			<use href="/symbol-defs.svg#icon-rating"></use>
		</svg>
	));
	return (
		<div className={css.comment}>
			<div className={css.groupNameAndRating}>
				<p className={css.avatar}>
					{review.reviewer_name.split("")[0].toUpperCase()}
				</p>
				<div>
					<p className={css.name}>{review.reviewer_name}</p>
					{stars}
				</div>
			</div>
			<p className={css.text}>{review.comment}</p>
		</div>
	);
};

export default Commentars;
