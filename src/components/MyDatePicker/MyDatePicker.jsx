import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from "./MyDatePicker.module.css";

import { registerLocale } from "react-datepicker";
import enUS from "date-fns/locale/en-US";

const FormikDatePicker = ({ name }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  const customEn = {
    ...enUS,
    localize: {
      ...enUS.localize,
      day: (n, { width }) => {
        const daysShort = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
        if (width === "short" || width === "abbreviated") {
          return daysShort[n];
        }
        return enUS.localize.day(n, { width });
      },
    },
  };

  registerLocale("customEn", customEn);

  return (
    <DatePicker
      className={style.input}
      selected={field.value}
      onChange={(val) => setFieldValue(name, val)}
      placeholderText="Booking Date"
      dateFormat="dd.MM.yyyy"
      locale="customEn"
      isClearable
      showPopperArrow={false}
    />
  );
};

export default FormikDatePicker;
