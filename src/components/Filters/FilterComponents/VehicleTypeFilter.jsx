import { makeFirstLetterToUpperCase } from "../../../variables/makeFirstLetterToUpperCase.js";
import css from "./FilterComponents.module.css";

const VehicleTypeFilter = ({ inputName, type, filtersDefaultValue }) => {
	const filterData = [
		{ key: "panelTruck", defaultValue: filtersDefaultValue.panelTruck },
		{ key: "integrated", defaultValue: filtersDefaultValue.integrated },
		{ key: "alcove", defaultValue: filtersDefaultValue.alcove },
	];

	return (
		<div>
			<h3 className={css.filterName}>Vehicle type</h3>
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

export default VehicleTypeFilter;
