import css from "./LoadMore.module.css";

const LoadMore = ({ loadMoreHandler }) => {
	return (
		<button onClick={loadMoreHandler} className={css.loadMore}>
			Load more
		</button>
	);
};

export default LoadMore;
