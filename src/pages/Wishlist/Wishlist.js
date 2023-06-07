import "../Wishlist/Wishlist.css";
import { ProductCard } from "../../Components";
import { useWishlist } from "../../contexts/WishlistContext";
import { useData } from "../../contexts/DataContext";
import { useEffect } from "react";

export function Wishlist() {
  const { wishlist } = useWishlist();
  

  return (
    <div className="wishlist__page__container">
      <h2 className="wishlist__page__heading">My Wishlist</h2>

      <div className="wishlist__products__container">
        {wishlist.length === 0 && (
         <h1>Wishlist Is Empty Please Add</h1>
        )}
        {wishlist.map((product) => {
          return (
            <ProductCard
              product={product}
              move={true}
              add={false}
              key={product._id}
            />
          );
        })}
      </div>
    </div>
  );
}
