import { toast } from "react-toastify";
import { useCart } from "../../contexts/CartContext";
import { useData } from "../../contexts/DataContext";
import "../OrderDetailsCard/OrderDetailsCard.css";
import { useNavigate } from "react-router";

export function OrderDetailsCard() {
  const navigate = useNavigate();
  const {
    cart,
    deliveryCharges,
    totalPrice,
    handleClearCart,
  } = useCart();
  const { selectedAddress, setIsLoading } = useData();
  const { name, houseNo, city, state, country, zip } = selectedAddress ?? {};

  const handlePlaceOrder = () => {
    setIsLoading(true);
    setTimeout(() => {
      handleClearCart();
      toast.success("Order Placed Successfully!");
      setTimeout(() => {
        navigate("/");
        setIsLoading(false);
        document.documentElement.scrollTop = 0;
      }, 500);
    }, 1000);
  };

  return (
    <div className="order__details__card__container">
      <h3>ORDER DETAILS</h3>

      <div className="order__details__container">
        <div>
          <strong>Item</strong>
          <strong>Qty</strong>
        </div>
        {cart.map(({ productName, qty }) => {
          return (
            <div>
              <p>{productName}</p>
              <p>{qty}</p>
            </div>
          );
        })}
      </div>
      <h3>PRICE DETAILS</h3>

      <div className="checkout__price__details__container">
        <div>
          <p>Price</p>
          <p>Rs {totalPrice.toFixed(2)}</p>
        </div>
        
        <div>
          <p>Delivery Charges</p>
          <p>Rs {deliveryCharges.toFixed(2)}</p>
        </div>
        <div>
          <strong>Total Amount</strong>
          <strong>Rs {(totalPrice + deliveryCharges).toFixed(2)}</strong>
        </div>
      </div>
      <div>
        <h3>DELIVER TO</h3>
        <div className="address__container">
          {selectedAddress ? (
            <p>{`${name}, ${houseNo}, ${city}, ${state}, ${country}, ${zip}`}</p>
          ) : (
            <p>Please select an address</p>
          )}
        </div>
      </div>
      <button className="place__order__btn" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
}
