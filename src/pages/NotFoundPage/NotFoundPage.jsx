import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
	return (
		<div className={css.container}>
			This page does not exist. Follow the link to go back
			<Link
				to="/"
				style={{ textDecoration: "underline", color: "var(--button)" }}
			>
				Go Home
			</Link>
		</div>
	);
};

export default NotFoundPage;
