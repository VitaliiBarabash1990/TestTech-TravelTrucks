import { makeFirstLetterToUpperCase } from "../../../variables/makeFirstLetterToUpperCase.js";
import css from "./FilterComponents.module.css";

const VehicleEquipmentFilter = ({ filtersDefaultValue, type, inputName }) => {
	const filterData = [
		{ key: "AC", defaultValue: filtersDefaultValue.AC },
		{ key: "automatic", defaultValue: filtersDefaultValue.transmission },
		{ key: "kitchen", defaultValue: filtersDefaultValue.kitchen },
		{ key: "TV", defaultValue: filtersDefaultValue.TV },
		{ key: "bathroom", defaultValue: filtersDefaultValue.bathroom },
	];

	return (
		<div>
			<p className={css.filters}>Filters</p>
			<h3 className={css.filterName}>Vehicle equipment</h3>
			<ul className={css.groupFilter}>
				{filterData.map(({ key, defaultValue }) => (
					<li key={key}>
						<input
							className={css.acCheckbox}
							type={type}
							id={key}
							value={key}
							defaultChecked={defaultValue}
							name={inputName}
						></input>
						<label className={css.acLabel} htmlFor={key}>
							<svg width={32} height={32}>
								<use href={`/symbol-defs.svg#icon-${key.toLowerCase()}`}></use>
							</svg>
							<p className={css.labelText}>{makeFirstLetterToUpperCase(key)}</p>
						</label>
					</li>
				))}
			</ul>
		</div>
	);
};

export default VehicleEquipmentFilter;
