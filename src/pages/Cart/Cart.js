import "../Cart/Cart.css";
import { useCart } from "../../contexts/CartContext";
import { CartPriceCard, CartProductCard } from "../../Components";
import { useData } from "../../contexts/DataContext";
import { useEffect } from "react";

export function Cart() {
  const { cart } = useCart();
  const { setTitle } = useData();

  useEffect(() => setTitle("Cart"), []);

  return (
    <div className="cart__page__container">
      <h2 className="cart__page__heading">My Cart ({cart.length})</h2>

      <div className="cart__details__container">
        <div className="cart__products__container">
          {cart.length === 0 && (
            <h1>Cart is Empty Please Add Some Products</h1>
          )}
          {cart.map((product) => {
            return <CartProductCard key={product._id} product={product} />;
          })}
        </div>
        <div>
          <CartPriceCard cart={cart} />
        </div>
      </div>
    </div>
  );
}
