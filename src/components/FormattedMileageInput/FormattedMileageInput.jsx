import { Field } from "formik";

const FormattedMileageInput = ({
  name,
  placeholder,
  className,
  prefix = "",
}) => {
  return (
    <Field name={name}>
      {({ field, form }) => {
        const handleChange = (e) => {
          const raw = e.target.value
            .replace(prefix, "")
            .replace(/\s/g, "")
            .replace(/\D/g, "");
          form.setFieldValue(name, raw);
        };

        const formatted = field.value
          ? `${prefix} ${new Intl.NumberFormat("uk-UA").format(field.value)}`
          : "";

        return (
          <input
            type="text"
            inputMode="numeric"
            id={name}
            value={formatted}
            onChange={handleChange}
            placeholder={placeholder}
            className={className}
          />
        );
      }}
    </Field>
  );
};

export default FormattedMileageInput;
