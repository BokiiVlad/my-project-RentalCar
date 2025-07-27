import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Car Not Found</h1>
      <p className={styles.text}>
        Looks like you’re lost. Try going back to the catalog.
      </p>
      <Link to="/catalog" className={styles.button}>
        Go Catalog
      </Link>
    </div>
  );
};

export default NotFound;
