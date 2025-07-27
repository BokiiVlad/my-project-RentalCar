import { useState, useRef, useEffect } from "react";
import style from "./CustomSelect.module.css";
import { useFormikContext } from "formik";

const CustomSelect = ({
  name,
  options = [],
  onChange,
  labelName,
  placeholder,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const { setFieldValue, values } = useFormikContext();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    setFieldValue(name, value);
    setOpen(false);
    onChange?.(value);
  };

  return (
    <div className={style.wrapper} ref={ref}>
      <label className={style.label}>{labelName}</label>
      <div
        className={style.inputPrice}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={style.selectedText}>
          {values[name] || placeholder || "Select an option"}
        </span>
        <svg width="16" height="16" className={style.icon}>
          <use
            href={
              open
                ? "/sprite/sprite.svg#icon-up-arrow"
                : "/sprite/sprite.svg#icon-down-arrow"
            }
          />
        </svg>
      </div>

      {open && (
        <ul className={style.list}>
          <li
            className={style.items}
            key="reset"
            onClick={() => handleSelect("")}
          >
            {placeholder}
          </li>

          {options.map((opt) => (
            <li
              className={style.items}
              key={opt}
              onClick={() => handleSelect(opt)}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
