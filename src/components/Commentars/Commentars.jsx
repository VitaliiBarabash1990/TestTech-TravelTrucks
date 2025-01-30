import css from "./Commentars.module.css";

const Commentars = () => {
	return (
		<div className={css.comment}>
			<div className={css.groupNameAndRating}>
				<p className={css.avatar}>A</p>
				<div>
					<p className={css.name}>Alice</p>
					<svg>
						<use></use>
					</svg>
				</div>
			</div>
			<p className={css.text}>
				The Mavericks panel truck was a perfect choice for my solo road trip.
				Compact, easy to drive, and had all the essentials. The kitchen
				facilities were sufficient, and the overall experience was fantastic.
			</p>
		</div>
	);
};

export default Commentars;
