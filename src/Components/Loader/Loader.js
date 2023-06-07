import { useData } from "../../contexts/DataContext";
import "../Loader/Loader.css";
import HashLoader from "react-spinners/HashLoader";

const override = {
  margin: "auto",
};

export function Loader() {
  const { isLoading } = useData();

  return (
    <div className="loader__container">
      <HashLoader

        color="white"
        cssOverride={override}
        loading={isLoading}
        size={100}
        speedMultiplier={2}
      />
    </div>
  );
}
