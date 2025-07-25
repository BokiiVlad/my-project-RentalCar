import { Field, Form, Formik } from "formik";
import style from "./BookingForm.module.css";
import "react-datepicker/dist/react-datepicker.css";
import FormikDatePicker from "../../components/MyDatePicker/MyDatePicker.jsx";

const BookingForm = () => {
  const initialValues = {
    name: "",
    email: "",
    comment: "",
  };
  const hundleSubmit = () => {};

  return (
    <>
      <div className={style.box}>
        <p className={style.mainText}>Book your car now</p>
        <p className={style.text}>
          Stay connected! We are always ready to help you.
        </p>
        <Formik initialValues={initialValues} onSubmit={hundleSubmit}>
          <Form>
            <div className={style.form}>
              <Field
                className={style.input}
                name="name"
                type="text"
                placeholder="Name"
              ></Field>
              <Field
                className={style.input}
                name="email"
                type="email"
                placeholder="Email"
              ></Field>
              <div>
                <FormikDatePicker />
              </div>
              <Field
                className={style.inputComment}
                name="comment"
                type="text"
                placeholder="Comment"
              ></Field>
            </div>
            <button type="submit" className={style.button}>
              Send
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default BookingForm;
