import { useSelector } from "react-redux";
import AdditionalInfoAndBooking from "../../components/AdditionalInfoAndBooking/AdditionalInfoAndBooking.jsx";
import CamperDetails from "../../components/CamperDetails/CamperDetails.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import css from "./DetailCamperPage.module.css";
import { selectLoaded } from "../../redux/campers/selectors.js";

const DetailCamperPage = () => {
	const loaded = useSelector(selectLoaded);
	return (
		<div className={css.container}>
			{loaded ? (
				<>
					<CamperDetails />
					<AdditionalInfoAndBooking />
				</>
			) : (
				<Loader />
			)}
		</div>
	);
};

export default DetailCamperPage;
