import { MoonLoader } from "react-spinners";

const Loader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
      <MoonLoader color="#3470ff" size={80} />
    </div>
  );
};

export default Loader;
