import { ThreeDots } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
	return (
		<div className={css.centredWrapper}>
			<ThreeDots
				visible={true}
				height="80"
				width="80"
				color="#e44848"
				radius="9"
				ariaLabel="three-dots-loading"
				wrapperStyle={{}}
				wrapperClass=""
			/>
		</div>
	);
};

export default Loader;
