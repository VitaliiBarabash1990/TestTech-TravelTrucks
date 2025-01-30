import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import css from "./BookingForm.module.css";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const bookingSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
	bookingDate: Yup.string()
		.matches(/^(\d{2})\.(\d{2})\.(\d{4})$/, "Date must be in format dd.mm.yyyy")
		.required("Select date in the future"),
	comment: Yup.string().max(400, "Message too long"),
});

const initialValues = {
	name: "",
	email: "",
	bookingDate: "",
	comment: "",
};

const BookingForm = () => {
	const { id } = useParams();
	const handleSubmit = (values) => {
		values.camperId = id;
		console.log(values);
		toast.success("Your booking sucessfully sended!");
	};
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={bookingSchema}
		>
			{({ setFieldValue }) => (
				<div className={css.formContainer}>
					<h3 className={css.header}>Book your campervan now</h3>
					<p className={css.description}>
						Stay connected! We are always ready to help you.
					</p>
					<Form className={css.form}>
						<div className={css.groupFieldAndError}>
							<Field
								type="text"
								name="name"
								placeholder="Name*"
								className={css.field}
							></Field>
							<ErrorMessage
								name="name"
								component="span"
								className={css.error}
							/>
						</div>
						<div className={css.groupFieldAndError}>
							<Field
								type="email"
								name="email"
								placeholder="Email*"
								className={css.field}
							></Field>
							<ErrorMessage
								name="email"
								component="span"
								className={css.error}
							/>
						</div>
						<div className={css.groupFieldAndError}>
							<Flatpickr
								placeholder="Booking date*"
								className={css.field}
								options={{
									dateFormat: "d.m.Y",
									minDate: new Date(),
								}}
								onChange={(selectedDates) => {
									if (selectedDates.length > 0) {
										const formattedDate = selectedDates[0]
											.toLocaleDateString("en-GB")
											.replace(/\//g, ".");
										setFieldValue("bookingDate", formattedDate);
									}
								}}
								onInput={(e) => {
									setFieldValue("bookingDate", e.target.value);
								}}
							/>
							<ErrorMessage
								name="bookingDate"
								component="span"
								className={css.error}
							/>
						</div>
						<div className={css.groupFieldAndError}>
							<Field
								as="textarea"
								name="comment"
								placeholder="Comment"
								className={`${css.field} ${css.comment}`}
							></Field>
							<ErrorMessage
								name="comment"
								component="span"
								className={css.error}
							/>
						</div>
						<button type="submit" className={`button ${css.submit}`}>
							Send
						</button>
					</Form>
				</div>
			)}
		</Formik>
	);
};

export default BookingForm;
