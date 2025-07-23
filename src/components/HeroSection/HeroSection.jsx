import Button from "../Button/Button.jsx";
import style from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={style.heroBox}>
      <h1 className={style.title}>Find your perfect rental car</h1>
      <p className={style.text}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <Button to={"/catalog"}>View Catalog</Button>
    </div>
  );
};

export default HeroSection;
