import { useState } from "react";
import Modal from "../Modal/Modal.jsx";
import RatingAndLocation from "../RatingAndLocation/RatingAndLocation.jsx";
import css from "./CamperDetails.module.css";
import { useSelector } from "react-redux";
import { selectChoosenCamper } from "../../redux/campers/selectors.js";

const CamperDetails = () => {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [modalData, setModalData] = useState(null);

	const choosenCamper = useSelector(selectChoosenCamper);

	const onModalClose = () => {
		setModalData(null);
		setIsOpen(false);
	};

	return (
		<>
			{modalIsOpen && (
				<Modal
					modalData={modalData}
					modalIsOpen={modalIsOpen}
					closeModal={onModalClose}
				/>
			)}
			<div className={css.camperDetails}>
				<h2 className={css.name}>{choosenCamper.name}</h2>
				<RatingAndLocation
					rating={choosenCamper.rating}
					reviews={choosenCamper.reviews}
					location={choosenCamper.location}
				/>
				<h2 className={css.price}>€{choosenCamper.price}.00</h2>
				<ul className={css.images}>
					{choosenCamper.gallery.map((photo) => (
						<li
							key={photo.thumb}
							onClick={() => {
								setIsOpen(true);
								setModalData(photo.original);
							}}
						>
							<img src={photo.thumb} alt="camper photo" className={css.image} />
						</li>
					))}
				</ul>
				<p className={css.description}>{choosenCamper.description}</p>
			</div>
		</>
	);
};

export default CamperDetails;
