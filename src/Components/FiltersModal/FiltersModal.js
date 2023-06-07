import { Icon } from "@iconify/react";
import { Filters } from "../Filters/Filters";
import "../FiltersModal/FiltersModal.css";

export function FiltersModal({ setShowModal }) {
  return (
    <section
      className="filters__modal__container"
      onClick={(e) => e.target.tagName === "SECTION" && setShowModal(false)}
    >
      <div
        className="modal__close__icon__container"
        onClick={() => setShowModal(false)}
      >
        <Icon icon="mingcute:close-fill" color="white" height={24} />
      </div>
      <div className="modal__filters__container">
        <Filters />
      </div>
    </section>
  );
}
