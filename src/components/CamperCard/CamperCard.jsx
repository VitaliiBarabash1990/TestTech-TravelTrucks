import clsx from "clsx";
import css from "./CamperCard.module.css";
import RatingAndLocation from "../RatingAndLocation/RatingAndLocation.jsx";
import EquipmentItem from "../EquipmentItem/EquipmentItem.jsx";
import { Link } from "react-router-dom";

const CamperCard = () => {
	const isFavorite = true;
	return (
		<>
			<img className={css.image} src="" alt="Truck photo" />
			<div className={css.mainInfo}>
				<div className={css.header}>
					<h3 className={css.name}>Mavericks</h3>
					<div className={css.groupPriceAndFavorite}>
						<h3 className={css.price}>€8000.00</h3>
						<button className={css.favoriteButton}>
							<svg className={clsx(isFavorite && css.isFavorite, css.favorite)}>
								<use href={`/symbol-defs.svg#icon-favorite`}></use>
							</svg>
						</button>
					</div>
				</div>
				<RatingAndLocation />
				<p className={css.description}>
					Embrace simplicity and freedom with the Mavericks panel truck...
				</p>
				<ul className={css.equipment}>
					<EquipmentItem />
					<EquipmentItem />
					<EquipmentItem />
					<EquipmentItem />
					<EquipmentItem />
					<EquipmentItem />
				</ul>
				<Link target="blank" className="button" to={`/catalog/${id}`}>
					Show more
				</Link>
			</div>
		</>
	);
};

export default CamperCard;
