import { Link } from "react-router-dom";
import "../CategoryCard/CategoryCard.css";
import { useData } from "../../contexts/DataContext";

export function CategoryCard() {
  const { categories, dataDispatch } = useData();

  const handleClick = (Gender) => {
    document.documentElement.scrollTop = 0;
    dataDispatch({ type: "SET_SINGLE_CATEGORY", payload: Gender });
  };

  return (
    <div className="categories__card__container">
      {categories.map(({ _id, Gender, image }) => {
        return (
          <div key={_id} className="category__card">
            <div className="category__img__container">
              <Link to="/products" onClick={() => handleClick(Gender)}>
                <img src={image} alt={Gender} loading="lazy" width="300px"/>
              </Link>
            </div>
            <h3>{Gender}</h3>
          </div>
        );
      })}
    </div>
  );
}
