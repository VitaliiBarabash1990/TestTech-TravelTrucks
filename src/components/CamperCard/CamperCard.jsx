import clsx from "clsx";
import css from "./CamperCard.module.css";
import RatingAndLocation from "../RatingAndLocation/RatingAndLocation.jsx";
import EquipmentItem from "../EquipmentItem/EquipmentItem.jsx";
import { Link } from "react-router-dom";

const CamperCard = ({ camperData, favoriteCampers, setFavoriteHandler }) => {
	const isFavorite = favoriteCampers.includes(camperData.id);
	return (
		<>
			<img
				className={css.image}
				src={camperData.gallery[0].thumb}
				alt="Truck photo"
			/>
			<div className={css.mainInfo}>
				<div className={css.header}>
					<h3 className={css.name}>{camperData.name}</h3>
					<div className={css.groupPriceAndFavorite}>
						<h3 className={css.price}>€{camperData.price}.00</h3>
						<button
							className={css.favoriteButton}
							onClick={() => {
								setFavoriteHandler(camperData.id);
							}}
						>
							<svg className={clsx(isFavorite && css.isFavorite, css.favorite)}>
								<use href={`/symbol-defs.svg#icon-favorite`}></use>
							</svg>
						</button>
					</div>
				</div>
				<RatingAndLocation
					rating={camperData.rating}
					reviews={camperData.reviews}
					location={camperData.location}
				/>
				<p className={css.description}>{camperData.description}</p>
				<ul className={css.equipment}>
					<EquipmentItem str={camperData.transmission} />
					<EquipmentItem str={camperData.engine} />
					{camperData.AC && <EquipmentItem str={"AC"} />}
					{camperData.kitchen && <EquipmentItem str={"kitchen"} />}
					{camperData.TV && <EquipmentItem str={"TV"} />}
					{camperData.bathroom && <EquipmentItem str={"bathroom"} />}
				</ul>
				<Link
					target="blank"
					className={`button ${css.button_more}`}
					to={`/catalog/${camperData.id}`}
				>
					Show more
				</Link>
			</div>
		</>
	);
};

export default CamperCard;
