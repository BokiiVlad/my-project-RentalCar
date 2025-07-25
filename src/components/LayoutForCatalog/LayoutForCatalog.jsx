import style from "./LayoutForCatalog.module.css";

const LayoutForCatalog = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>;
};

export default LayoutForCatalog;
