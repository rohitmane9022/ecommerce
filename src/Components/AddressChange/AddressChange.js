import { useData } from "../../contexts/DataContext";
import "./AddressChange.css";
import { AddressSelectModal } from "..";
import {  useState } from "react";
import { toast } from "react-toastify";

export function AddressChange() {
  const { selectedAddress } = useData();
  const [addressSelectModal, setAddressSelectModal] = useState(false);

  const { name, houseNo, city, state, country, zip } = selectedAddress ?? {};

  return (
    <div className="address__change__container">
      <div className="address__change__details">
        <h3>Delivery Address</h3>
        {selectedAddress ? (
          <p>{`${name}, ${houseNo}, ${city}, ${state}, ${country}, ${zip}`}</p>
        ) : (
          <p>Please select an address</p>
        )}
      </div>

      <button
        className="address__change__btn"
        onClick={() => setAddressSelectModal(true)}
      >
        Change
      </button>

      {addressSelectModal && (
        <AddressSelectModal setAddressSelectModal={setAddressSelectModal} />
      )}
    </div>
  );
}
