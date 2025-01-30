import css from "./EquipmentItem.module.css";

const EquipmentItem = () => {
	return (
		<li className={css.equipmentItem}>
			<svg width={20} height={20} fill="#101828">
				<use href={`/symbol-defs.svg#icon-${}`}></use>
			</svg>
		</li>
	);
};

export default EquipmentItem;
