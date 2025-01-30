import ReactModal from "react-modal";
import css from "./Modal.module.css";

const Modal = () => {
	<ReactModal
		ariaHideApp={false}
		overlayClassName={css.backdrop}
		className={css.modal}
		isOpen=""
		onRequestClose=""
	>
		<img src="" alt="camper original photo" className={css.image} />
	</ReactModal>;
};

export default Modal;
