import { useEffect } from "react";
import style from "./Filters.module.css";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrand } from "../../redux/filters/operations.js";
import { selectBrands } from "../../redux/filters/selectors.js";
import { addFilters } from "../../redux/filters/filtersSlice.js";

const Filters = () => {
  const price = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200];
  const dispatch = useDispatch();
  const brandsArr = useSelector(selectBrands);

  useEffect(() => {
    dispatch(fetchBrand());
  }, [dispatch]);

  const handleSubmit = (values) => {
    const normalizedValue = {
      ...values,
      minMileage: String(values.minMileage),
      maxMileage: String(values.maxMileage),
      rentalPrice: String(values.rentalPrice),
    };
    dispatch(addFilters(normalizedValue));
  };

  return (
    <Formik
      initialValues={{
        brand: "",
        rentalPrice: "",
        minMileage: "",
        maxMileage: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={style.box}>
          {" "}
          <div>
            <label className={style.label} htmlFor="brand">
              Car brand
            </label>
            <Field
              className={style.inputPrice}
              as="select"
              id="brand"
              name="brand"
            >
              <option value="">Choose a brand</option>
              {brandsArr.map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </Field>
          </div>
          <div>
            <label className={style.label} htmlFor="rentalPrice">
              Price / 1 hour
            </label>
            <Field
              className={style.inputPrice}
              as="select"
              id="rentalPrice"
              name="rentalPrice"
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
                name="minMileage"
                placeholder="From"
                id="minMileage"
              />
              <Field
                className={style.inputTo}
                type="number"
                name="maxMileage"
                placeholder="To"
                id="maxMileage"
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
