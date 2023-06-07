import { Icon } from "@iconify/react";
import "../CartProductCard/CartProductCard.css";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { BtnLoader } from "../BtnLoader/BtnLoader";

export function CartProductCard({ product }) {
  const {
    _id,
    productName,
    productImage,
    price,
    qty,
  } = product;
  const {
    handleRemoveFromCart,
    handleIncreaseOrDecrease,
    isCartLoading,
    setIsCartLoading,
  } = useCart();
  const [cartBtnLoading, setCartBtnLoading] = useState(false);
  const [wishlistBtnLoading, setWishlistBtnLoading] = useState(false);

  const { wishlist, handleAddToWishlist } = useWishlist();
  const navigate = useNavigate();

  const presentInWishlist = wishlist.find((product) => product._id === _id);

  useEffect(() => {
    if (!isCartLoading) {
      setCartBtnLoading(false);
      setWishlistBtnLoading(false);
    }
  }, [isCartLoading]);

  const handleWishlistClick = () => {
    if (!presentInWishlist) {
      setWishlistBtnLoading(true);
      setIsCartLoading(true);
      handleRemoveFromCart("REMOVE_FROM_CART", product);
      handleAddToWishlist("ADD_TO_WISHLIST", product);
    } else {
      navigate("/wishlist");
    }
  };

  const handleCartClick = () => {
    setCartBtnLoading(true);
    setIsCartLoading(true);
    handleRemoveFromCart("REMOVE_FROM_CART", product);
  };

  return (
    <div className="cart__product__card__container">
      <div className="cart__product__img__container">
        <img src={productImage} alt={productName} />
      </div>

      <div className="cart__product__details__container">
        <h3>{productName}</h3>

        <div className="cart__product__price__container">
          <h3> {price}/-</h3>
        </div>
        <div className="quantity__container">
          <p>Quantity:</p>
          <div className="quantity__counter__container">
            <Icon
              icon="simple-line-icons:minus"
              color="#5348c7"
              className="increase__decrease__icons"
              onClick={() =>
                qty > 1
                  ? handleIncreaseOrDecrease("DECREASE_ITEM", product)
                  : handleRemoveFromCart("REMOVE_FROM_CART", product)
              }
            />

            <p>{qty}</p>

            <Icon
              icon="simple-line-icons:plus"
              color="#5348c7"
              className="increase__decrease__icons"
              onClick={() => handleIncreaseOrDecrease("INCREASE_ITEM", product)}
            />
          </div>
        </div>

        <div className="buttons__container">
          <button
            className="remove__from__cart__btn"
            onClick={() => handleCartClick()}
            disabled={cartBtnLoading}
          >
            {cartBtnLoading ? (
              <BtnLoader loading={cartBtnLoading} color={"white"} />
            ) : (
              " Remove From Cart"
            )}
          </button>

          <button
            className="move__to__wishlist__btn"
            onClick={() => handleWishlistClick()}
            disabled={wishlistBtnLoading}
          >
            {wishlistBtnLoading ? (
              <BtnLoader loading={wishlistBtnLoading} color={"#5348c7"} />
            ) : presentInWishlist ? (
              "Go To Wishlist"
            ) : (
              "Move To Wishlist"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
