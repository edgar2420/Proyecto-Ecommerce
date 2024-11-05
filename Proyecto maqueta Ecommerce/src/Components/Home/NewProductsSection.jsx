import React from "react";
import ProductCard from "./ProductCard";

export default function NewProductsSection() {
  const newProducts = [0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <section class="padding-y bg-light">
      <div className="container">
        <div className="row">
          {newProducts.map((product) => (
            <ProductCard />
          ))}
        </div>
      </div>
    </section>
  );
}
