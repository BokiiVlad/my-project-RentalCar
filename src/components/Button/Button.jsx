import clsx from "clsx";
import style from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = ({ to, className, children, ...rest }) => {
  return (
    <Link to={to} className={clsx(style.button, className)} {...rest}>
      {children}
    </Link>
  );
};

export default Button;
