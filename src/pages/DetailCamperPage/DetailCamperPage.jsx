import { useDispatch, useSelector } from "react-redux";
import AdditionalInfoAndBooking from "../../components/AdditionalInfoAndBooking/AdditionalInfoAndBooking.jsx";
import CamperDetails from "../../components/CamperDetails/CamperDetails.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import css from "./DetailCamperPage.module.css";
import { selectLoaded } from "../../redux/campers/selectors.js";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getCamperById } from "../../redux/campers/operations.js";

const DetailCamperPage = () => {
	const loaded = useSelector(selectLoaded);
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getCamperById(id));
	}, []);
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
