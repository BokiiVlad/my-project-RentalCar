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
      <label htmlFor={`${name}-input`} className={style.label}>
        {labelName}
      </label>

      {/* прихований input для зв’язку з label */}
      <input
        type="text"
        id={`${name}-input`}
        value={values[name]}
        readOnly
        className={style.hiddenInput}
        aria-hidden="true"
        tabIndex={-1}
      />

      <div
        className={style.inputPrice}
        onClick={() => setOpen((prev) => !prev)}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${name}-input`}
        tabIndex={0}
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
        <ul className={style.list} role="listbox">
          <li
            className={style.items}
            key="reset"
            onClick={() => handleSelect("")}
            id={`${name}-option-reset`}
            role="option"
            aria-selected={values[name] === ""}
          >
            {placeholder}
          </li>

          {options.map((opt) => (
            <li
              className={style.items}
              key={opt}
              onClick={() => handleSelect(opt)}
              id={`${name}-option-${opt}`}
              role="option"
              aria-selected={values[name] === opt}
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
