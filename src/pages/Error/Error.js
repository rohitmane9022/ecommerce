import { useEffect } from "react";
import { useData } from "../../contexts/DataContext";
import "../Error/Error.css";
import notfound from "../../image/404.jpg"

export function Error() {
  const { setTitle } = useData();

  useEffect(() => setTitle("Page Not Found"), []);
  return (
    <div className="error_img__container">
      <img
        src={notfound}
        alt="Page Not Found"  
        className="page__not__found__img"
      ></img>
    </div>
  );
}
