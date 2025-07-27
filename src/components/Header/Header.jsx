import { Link } from "react-router-dom";
import Logo from "../Logo/Logo.jsx";
import style from "./Header.module.css";
import Container from "../Container/Container.jsx";

const Header = () => {
  return (
    <Container className={style.headerBox}>
      <Logo />
      <nav className={style.navBox}>
        <Link className={style.link} to="/">
          Home
        </Link>
        <Link className={style.link} to="/catalog">
          Catalog
        </Link>
      </nav>
    </Container>
  );
};

export default Header;
