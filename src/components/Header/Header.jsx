import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import clsx from "clsx";
import style from "./Header.module.css";
import Container from "../Container/Container.jsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(style.link, isActive && style.active);
};

const Header = () => {
  return (
    <Container className={style.headerBox}>
      <Logo />
      <nav className={style.navBox}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/catalog">
          Catalog
        </NavLink>
      </nav>
    </Container>
  );
};

export default Header;
