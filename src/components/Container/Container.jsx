import style from "./Container.module.css";

const Container = ({ children, className = "" }) => {
  return (
    <div className={`${style.container} ${className}`.trim()}>{children}</div>
  );
};

export default Container;
