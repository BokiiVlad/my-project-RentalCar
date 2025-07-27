import { useEffect } from "react";
import style from "./Filters.module.css";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrand } from "../../redux/filters/operations.js";
import { selectBrands } from "../../redux/filters/selectors.js";
import { addFilters } from "../../redux/filters/filtersSlice.js";
import FormattedMileageInput from "../FormattedMileageInput/FormattedMileageInput.jsx";
import CustomSelect from "../CustomSelect/CustomSelect.jsx";

const Filters = () => {
  const price = [20, 30, 40, 50, 60, 70, 80];
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
          <Field name="brand">
            {({ field, form }) => (
              <CustomSelect
                name="brand"
                labelName="Car brand"
                placeholder="Choose a brand"
                options={brandsArr}
                value={field.value}
                onChange={(val) => form.setFieldValue("brand", val)}
              />
            )}
          </Field>

          <Field name="rentalPrice">
            {({ field, form }) => (
              <CustomSelect
                name="rentalPrice"
                labelName="Price/ 1 hour"
                placeholder="Choose a price"
                options={price}
                value={field.value}
                onChange={(val) => form.setFieldValue("rentalPrice", val)}
              />
            )}
          </Field>

          <div>
            <label className={style.label}>Car mileage / km</label>
            <div>
              <FormattedMileageInput
                className={style.inputFrom}
                name="minMileage"
                placeholder="From"
                // prefix={"From"}
              />
              <FormattedMileageInput
                className={style.inputTo}
                name="maxMileage"
                placeholder="To"
                // prefix={"To"}
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
