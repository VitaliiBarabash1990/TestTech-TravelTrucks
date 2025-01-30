import css from "./AdditionalNavigation.module.css";

const AdditionalNavigation = ({ handleSwitchTab, choosenTab }) => {
	return (
		<div className={css.groupButtons}>
			<button
				className={`${css.button} ${
					choosenTab === "features" ? css.active : ""
				}`}
				type="button"
				onClick={() => {
					handleSwitchTab("features");
				}}
			>
				Features
			</button>
			<button
				className={`${css.button} ${
					choosenTab === "reviews" ? css.active : ""
				}`}
				type="button"
				onClick={() => {
					handleSwitchTab("reviews");
				}}
			>
				Reviews
			</button>
		</div>
	);
};

export default AdditionalNavigation;
