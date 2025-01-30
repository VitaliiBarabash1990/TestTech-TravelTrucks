import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
	return (
		<div className={css.container}>
			This page does not exist. If you see this you need to
			<Link to="/" style={{ textDecoration: "underline", color: "var(--red)" }}>
				Go Home
			</Link>
		</div>
	);
};

export default NotFoundPage;
