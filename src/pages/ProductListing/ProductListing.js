import "../ProductListing/ProductListing.css";
import { Filters, FiltersModal, ProductCard } from "../../Components";
import { useData } from "../../contexts/DataContext";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useEffect } from "react";

export function ProductListing() {
  const { filteredProducts, setTitle } = useData();
  const [showModal, setShowModal] = useState(false);


  return (
    <div className="products__listing__container">
      <aside className="aside">
        <Filters />
      </aside>
      <div className="main">
        <div className="product__listing__heading__contianer">
          <h3>Showing All Products</h3>
          <div
            className="filter__icon__container"
            onClick={() => setShowModal(true)}
          >
            <Icon icon="mingcute:filter-line" color="#333333" height={24} />
          </div>
        </div>

        <div className="products__container">
          {filteredProducts.map((product) => {
            return (
              <ProductCard
                product={product}
                add={true}
                move={false}
                key={product._id}
              />
            );
          })}
        </div>

        {showModal && <FiltersModal setShowModal={setShowModal} />}
      </div>
    </div>
  );
}
