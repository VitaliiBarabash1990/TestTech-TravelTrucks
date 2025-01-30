import { useState } from "react";
import Modal from "../Modal/Modal.jsx";
import RatingAndLocation from "../RatingAndLocation/RatingAndLocation.jsx";
import css from "./CamperDetails.module.css";

const CamperDetails = () => {
	const [modalIsOpen, setIsOpen] = useState(false);

	return (
		<>
			{modalIsOpen && <Modal />}
			<div className={css.camperDetails}>
				<h2 className={css.name}>Mavericks</h2>
				<RatingAndLocation />
				<h2 className={css.price}>€8000.00</h2>
				<ul className={css.images}>
					{[].map((photo) => (
						<li
							key={photo.thumb}
							onClick={() => {
								setIsOpen(true);
							}}
						>
							<img src={photo.thumb} alt="camper photo" className={css.image} />
						</li>
					))}
				</ul>
				<p className={css.description}>
					Embrace simplicity and freedom with the Mavericks panel truck, an
					ideal choice for solo travelers or couples seeking a compact and
					efficient way to explore the open roads. This no-frills yet reliable
					panel truck offers the essentials for a comfortable journey, making it
					the perfect companion for those who value simplicity and
					functionality.
				</p>
			</div>
		</>
	);
};

export default CamperDetails;
