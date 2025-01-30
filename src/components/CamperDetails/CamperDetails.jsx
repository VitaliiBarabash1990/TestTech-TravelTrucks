const CamperDetails = () => {
	return (
		<>
			{modalIsOpen && (
				<Modal
					modalData={modalData}
					modalIsOpen={modalIsOpen}
					closeModal={onModalClose}
				/>
			)}
			<div className={css.camperDetails}>
				<h2 className={css.name}>{name}</h2>
				<RatingAndLocation
					rating={rating}
					reviews={reviews}
					location={location}
				/>
				<h2 className={css.price}>€{price}.00</h2>
				<ul className={css.images}>
					{gallery.map((photo) => (
						<li
							key={photo.thumb}
							onClick={() => {
								setIsOpen(true);
								setModalData(photo.original);
							}}
						>
							<img src={photo.thumb} alt="camper photo" className={css.image} />
						</li>
					))}
				</ul>
				<p className={css.description}>{description}</p>
			</div>
		</>
	);
};

export default CamperDetails;
