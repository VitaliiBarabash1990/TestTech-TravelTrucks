import { Link, NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
	const buildLinkClass = ({ isActive }) => {
		return clsx(css.link, isActive && css.activeLink);
	};

	return (
		<div className={css.NavigationLayout}>
			<div className={css.Navigation}>
				<div className={css.NavigationWraper}>
					<Link to="/">
						<svg className={css.logo} width={136} height={15}>
							<use href="/symbol-defs.svg#icon-logo"></use>
						</svg>
					</Link>
					<div className={css.menu}>
						<NavLink className={buildLinkClass} to="/">
							Home
						</NavLink>
						<NavLink className={buildLinkClass} to="/catalog">
							Catalog
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
