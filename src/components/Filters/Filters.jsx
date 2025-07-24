import style from "./Filters.module.css";
import { Formik, Form, Field } from "formik";

const Filters = () => {
  const price = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200];
  const handleSubmit = () => {};
  return (
    <Formik
      initialValues={{ price: "", mileageFrom: "", mileageTo: "" }}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={style.box}>
          <div>
            <label className={style.label} htmlFor="price">
              Price / 1 hour
            </label>
            <Field
              className={style.inputPrice}
              as="select"
              id="price"
              name="price"
            >
              <option value="">Choose a price</option>
              {price.map((el) => (
                <option key={el} value={el}>
                  ${el}
                </option>
              ))}
            </Field>
          </div>
          <div>
            <label className={style.label}>Car mileage / km</label>
            <div>
              <Field
                className={style.inputFrom}
                type="number"
                name="mileageFrom"
                placeholder="From"
                id="mileageFrom"
              />
              <Field
                className={style.inputTo}
                type="number"
                name="mileageTo"
                placeholder="To"
                id="mileageTo"
              />
            </div>
          </div>

          <button className={style.but} type="submit">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default Filters;
