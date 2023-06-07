import { toast } from "react-toastify";
import "../CartPriceCard/CartPriceCard.css";
import { useNavigate } from "react-router";
import { useCart } from "../../contexts/CartContext";

export function CartPriceCard({ cart }) {
  const { deliveryCharges, totalPrice } = useCart();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    if (cart.length >= 1) {
      navigate("/check-out");
    } else {
      toast.warning("Cart is Empty.");
    }
  };

  return (
    <div className="cart__price__details__container">
      <h3>Price Details</h3>
      <hr></hr>
      <div>
        <p>Price</p>
        <p>Rs {totalPrice.toFixed(2)}</p>
      </div>
      <div>
        <p>Delivery Charges</p>
        <p>Rs {deliveryCharges.toFixed(2)}</p>
      </div>
      <hr></hr>
      <div>
        <h3>Total Amount</h3>
        <h3>Rs {(totalPrice + deliveryCharges).toFixed(2)}</h3>
      </div>
      <hr></hr>
     
      <button className="check__out__btn" onClick={handlePlaceOrder}>
        Check Out
      </button>
    </div>
  );
}
