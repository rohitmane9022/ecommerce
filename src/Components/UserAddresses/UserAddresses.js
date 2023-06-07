import { useState } from "react";
import { useData } from "../../contexts/DataContext";
import { AddressCard } from "../AddressCard/AddressCard";
import "../UserAddresses/UserAddresses.css";
import { AddressModal } from "../AddressModal/AddressModal";

export function UserAddresses() {
  const { addresses } = useData();
  const [showAddressModal, setShowAddressModal] = useState(false);

  return (
    <div className="user__addresses__container">
      {addresses.map((address) => {
        return <AddressCard address={address} key={address.id} />;
      })}
      <button
        className="add__new__address__btn"
        onClick={() => setShowAddressModal(true)}
      >
        + Add New Address
      </button>
      {showAddressModal && (
        <AddressModal setShowAddressModal={setShowAddressModal} mode="add" />
      )}
    </div>
  );
}
