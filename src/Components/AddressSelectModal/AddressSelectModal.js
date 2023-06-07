import { Icon } from "@iconify/react";
import "../AddressSelectModal/AddressSelectModal.css";
import { UserAddresses } from "../index";

export function AddressSelectModal({ setAddressSelectModal }) {
  return (
    <section
      className="address__select__container"
      onClick={(e) =>
        e.target.tagName === "SECTION" && setAddressSelectModal(false)
      }
    >
      <div
        className="modal__close__icon__container"
        onClick={() => setAddressSelectModal(false)}
      >
        <Icon icon="mingcute:close-fill" color="white" height={24} />
      </div>
      <div>
        <UserAddresses />
      </div>
    </section>
  );
}
