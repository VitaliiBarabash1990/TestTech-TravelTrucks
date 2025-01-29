import css from "./FilterComponents.module.css";

const LocationInput = ({ state }) => {
	return (
		<div className={css.locationFilterBlock}>
			<label htmlFor="location" className={css.location}>
				Location
			</label>
			<div className={css.inputGroup}>
				<input
					id="location"
					className={css.input}
					defaultValue={state}
					type="text"
					placeholder="City"
				/>
				<svg className={css.locationIcon}>
					<use href="/symbol-defs.svg#icon-map"></use>
				</svg>
			</div>
		</div>
	);
};

export default LocationInput;
