import { useSelector } from "react-redux";
import { makeFirstLetterToUpperCase } from "../../variables/makeFirstLetterToUpperCase.js";
import EquipmentItem from "../EquipmentItem/EquipmentItem.jsx";
import css from "./Features.module.css";
import { selectChoosenCamper } from "../../redux/campers/selectors.js";

const Features = () => {
	const {
		form,
		length,
		width,
		height,
		tank,
		consumption,
		transmission,
		engine,
		AC,
		bathroom,
		kitchen,
		TV,
		radio,
		refrigerator,
		microwave,
		gas,
		water,
	} = useSelector(selectChoosenCamper);

	const iconsNames = Object.entries({
		AC,
		bathroom,
		kitchen,
		TV,
		radio,
		refrigerator,
		microwave,
		gas,
		water,
	})
		.filter(([, value]) => value === true)
		.map(([key]) => key);
	const engineAndTransmissionIcons = [transmission, engine];
	const vehicleDetailData = [form, length, width, height, tank, consumption];
	const vehicleDetailKeys = [
		"Form",
		"Length",
		"Width",
		"Height",
		"Tank",
		"Consumption",
	];

	return (
		<div className={css.features}>
			<ul className={css.groupIcons}>
				{engineAndTransmissionIcons.map((name) => (
					<EquipmentItem str={name} key={name} />
				))}
				{iconsNames.map((name) => (
					<EquipmentItem str={name} key={name} />
				))}
			</ul>
			<div className={css.vehicleDetail}>
				<h3 className={css.vehicleDataHeader}>Vehicle details</h3>
				<ul className={css.vehicleDetailData}>
					{vehicleDetailData.map((detail, index) => (
						<li key={detail} className={css.vehicleDetailDataElement}>
							<p className={css.elementText}>{vehicleDetailKeys[index]}</p>
							<p className={css.elementText}>
								{makeFirstLetterToUpperCase(detail)}
							</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Features;
