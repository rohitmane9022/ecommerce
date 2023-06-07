import { Icon } from "@iconify/react";
import "../OrderUpdateModal/OrderUpdateModal.css";
import { CartProductCard, UserAddresses } from "../index";
import { useCart } from "../../contexts/CartContext";

export function OrderUpdateModal({ setOrderUpdateModal }) {
  const { cart } = useCart();

  return (
    <section
      className="order__update__container"
      onClick={(e) =>
        e.target.tagName === "SECTION" && setOrderUpdateModal(false)
      }
    >
      <div
        className="modal__close__icon__container"
        onClick={() => setOrderUpdateModal(false)}
      >
        <Icon icon="mingcute:close-fill" color="white" height={24} />
      </div>
      <div className="order__update__products__container">
        {cart.map((product) => {
          return <CartProductCard key={product._id} product={product} />;
        })}
      </div>
    </section>
  );
}
