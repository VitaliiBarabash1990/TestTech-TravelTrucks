import { useState } from "react";
import AdditionalNavigation from "../AdditionalNavigation/AdditionalNavigation.jsx";
import css from "./AdditionalInfoAndBooking.module.css";
import Features from "../Features/Features.jsx";
import Reviews from "../Reviews/Reviews.jsx";
import BookingForm from "../BookingForm/BookingForm.jsx";

const AdditionalInfoAndBooking = () => {
	const [choosenTab, setChoosenTab] = useState("features");
	const handleSwitchTab = (tab) => {
		setChoosenTab(tab);
	};
	return (
		<div>
			<AdditionalNavigation
				handleSwitchTab={handleSwitchTab}
				choosenTab={choosenTab}
			/>
			<div className={css.groupFeaturesAndBooking}>
				{choosenTab === "features" ? <Features /> : <Reviews />}
				<BookingForm />
			</div>
		</div>
	);
};

export default AdditionalInfoAndBooking;
