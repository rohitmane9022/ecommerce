import { useNavigate, useParams } from "react-router";
import "../IndividualProductCard/IndividualProductCard.css";
import { useData } from "../../contexts/DataContext";
import { Icon } from "@iconify/react";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";
import { BtnLoader } from "../BtnLoader/BtnLoader";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

export function IndividualProductCard() {
  const { productId } = useParams();
  const { products } = useData();
  const { cart, handleAddToCart, isCartLoading, setIsCartLoading } = useCart();
  const {
    wishlist,
    handleAddToWishlist,
    handleRemoveFromWishlist,
    isWishlistLoading,
    setIsWishlistLoading,
  } = useWishlist();
  const [isBtnLoading, setIsBtnLoading] = useState(false);
  const { loggedIn } = useAuth();
  const navigate = useNavigate();

  let selectedProduct = products.find(({ _id }) => _id === productId);

  const {
    _id,
    productName,
    productDescription,
    productImage,
    price,
    rating,
  } = selectedProduct ?? "";

  const presentInCart = cart.find((product) => product._id === _id);

  const presentInWishlist = wishlist.find((product) => product._id === _id);

  useEffect(() => {
    if (!isCartLoading) {
      setIsBtnLoading(false);
    }
  }, [isCartLoading]);

  const handleCartClick = () => {
    if (loggedIn) {
      setIsBtnLoading(true);
      setIsCartLoading(true);

      if (!presentInCart) {
        handleAddToCart("ADD_TO_CART", selectedProduct);
      } else {
        navigate("/cart");
      }
    } else {
      setIsBtnLoading(false);
      setIsCartLoading(false);
      toast.error("Please login first");
    }
  };

  const handleWishlistClick = () => {
    if (loggedIn) {
      setIsWishlistLoading(true);

      if (!presentInWishlist) {
        handleAddToWishlist("ADD_TO_WISHLIST", selectedProduct);
      } else {
        handleRemoveFromWishlist("REMOVE_FROM_WISHLIST", selectedProduct);
      }
    } else {
      setIsWishlistLoading(false);
      toast.error("Please login first");
    }
  };

  return (
    <div className="individual__product__container">
      <div className="product__details__container">
        <div className="image__section">
          <div id="image__container">
            <img src={productImage} alt={productName} />
            <div
              id="wishlist__icon"
              onClick={() => !isWishlistLoading && handleWishlistClick()}
            >
              {presentInWishlist ? (
                <Icon icon="mdi:cards-heart" color="red" height={24} />
              ) : (
                <Icon
                  icon="mdi:cards-heart-outline"
                  color="#393939"
                  height={24}
                />
              )}
            </div>
          </div>
        </div>

        <div className="details__section">
          <div className="details__section__heading">
            <h3>{productName}</h3>

            <div className="price__container">
              <h3>Rs {price}/-</h3>
            </div>

            <div id="rating__container">
              <p>{rating}</p>
              <Icon
                icon="material-symbols:star-rounded"
                color="#FFC700"
                height={20}
              />
            </div>
          </div>

          <p>
            <b>Description:</b> {productDescription}
          </p>

          <button
            id="add__to__cart__btn"
            onClick={() => handleCartClick()}
            disabled={isBtnLoading}
          >
            {isBtnLoading ? (
              <BtnLoader loading={isBtnLoading} color={"white"} />
            ) : presentInCart ? (
              "Go to Cart"
            ) : (
              "Add to Cart"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
