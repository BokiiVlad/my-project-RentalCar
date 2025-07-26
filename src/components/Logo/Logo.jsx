import { Link } from "react-router-dom";
import style from "./Logo.module.css";

const Logo = () => {
  return (
    <Link className={style.link} to="/">
      <svg width="104" height="16">
        <use className={style.use} href="/sprite/sprite.svg#icon-hover" />
      </svg>
    </Link>
  );
};

export default Logo;
