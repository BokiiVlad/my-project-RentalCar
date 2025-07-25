import style from "./ContainerForDatails.module.css";

const ContainerForDetails = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default ContainerForDetails;
