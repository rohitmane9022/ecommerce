import "../CheckOut/CheckOut.css";
import {
  AddressChange,
  OrderChange,
  OrderDetailsCard,
} from "../../Components/index";

export function CheckOut() {
  return (
    <div className="checkout__container">
      <div className="checkout__summary__container">
        <AddressChange />
        <OrderChange />
      </div>

      <div className="checkout__details__container">
        <OrderDetailsCard />
      </div>
    </div>
  );
}
