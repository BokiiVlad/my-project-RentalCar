import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import style from "./MyDatePicker.module.css";

import { registerLocale } from "react-datepicker";
import enUS from "date-fns/locale/en-US";

function MyDatePicker() {
  const [startDate, setStartDate] = useState(null);

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
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      placeholderText="Booking Date"
      dateFormat="dd.MM.yyyy"
      locale="customEn"
      isClearable
      showPopperArrow={false}
    />
  );
}

export default MyDatePicker;
