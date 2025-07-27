import { Field, Form, Formik } from "formik";
import style from "./BookingForm.module.css";
import "react-datepicker/dist/react-datepicker.css";
import FormikDatePicker from "../../components/MyDatePicker/MyDatePicker.jsx";
import toast, { Toaster } from "react-hot-toast";

const BookingForm = () => {
  const initialValues = {
    name: "",
    email: "",
    comment: "",
    date: null,
  };

  const handleSubmit = (values, { resetForm }) => {
    // тут логіка відправки, просто показую тост
    toast.success("Success! Your car rental request has been received.", {
      style: {
        background: "#3470ff",
        color: "#fff",
      },
    });
    resetForm();
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className={style.box}>
        <p className={style.mainText}>Book your car now</p>
        <p className={style.text}>
          Stay connected! We are always ready to help you.
        </p>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <div className={style.form}>
              <Field
                className={style.input}
                name="name"
                type="text"
                placeholder="Name"
              />
              <Field
                className={style.input}
                name="email"
                type="email"
                placeholder="Email"
              />
              <div>
                <FormikDatePicker name={"date"} />
              </div>
              <Field
                className={style.inputComment}
                name="comment"
                type="text"
                placeholder="Comment"
              />
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
