import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
	return (
		<div className={css.homePage}>
			<h1 className={css.homePageHeader}>Campers of your dreams</h1>
			<h2 className={css.homePageDescr}>
				You can find everything you want in our catalog
			</h2>
			<Link className="button" to={"/catalog"}>
				View Now
			</Link>
		</div>
	);
};

export default HomePage;
