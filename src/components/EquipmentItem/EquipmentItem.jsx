import { makeFirstLetterToUpperCase } from "../../variables/makeFirstLetterToUpperCase.js";
import css from "./EquipmentItem.module.css";

const EquipmentItem = ({ str }) => {
	return (
		<li className={css.equipmentItem}>
			<svg width={20} height={20} fill="#101828">
				<use href={`/symbol-defs.svg#icon-${str.toLowerCase()}`}></use>
			</svg>
			{makeFirstLetterToUpperCase(str)}
		</li>
	);
};

export default EquipmentItem;
