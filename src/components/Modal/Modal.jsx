import ReactModal from "react-modal";
import css from "./Modal.module.css";
import { useEffect } from "react";

const Modal = ({ modalData, modalIsOpen, closeModal }) => {
	useEffect(() => {
		if (modalIsOpen) {
			document.body.classList.add("modal-open");
		} else {
			document.body.classList.remove("modal-open");
		}
		return () => {
			document.body.classList.remove("modal-open");
		};
	}, [modalIsOpen]);

	if (!modalIsOpen) return null;
	return (
		<ReactModal
			ariaHideApp={false}
			overlayClassName={css.backdrop}
			className={css.modal}
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
		>
			<img src={modalData} alt="camper original photo" className={css.image} />
		</ReactModal>
	);
};

export default Modal;
