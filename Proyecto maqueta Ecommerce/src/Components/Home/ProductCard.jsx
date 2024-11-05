import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ProductCard(props) {
  return (
    <div className="col-lg-3 col-sm-6 col-16">
      <div className="card card-product-grid">
        <div className="img-wrap" style={{ padding: "0" }}>
          <img src="/images/product.jpg" />
        </div>
        <div className="info-wrap">
          <p className="title">
            Productos Ecologicos
          </p>
          <div className="rating-wrap">
            <ul className="rating-stars">
              <li className="stars-active" style={{ width: "90%" }}>
                <img src="/images/stars-active.svg" alt="" />
              </li>
              <li>
                <img src="/images/starts-disable.svg" alt="" />
              </li>
            </ul>
            <span className="label-rating text-warning">4.5</span>
          </div>
        </div>
        <div className="bottom-wrap">
          <a href="/" className="btn btn-primary float-end">
            {" "}
            <FontAwesomeIcon icon={faShoppingCart} />
          </a>
          <div className="price-wrap lh-sm">
            <strong className="price"> 800 Bs </strong> <br />
            <small className="text-muted"> disponible </small>
          </div>
        </div>
      </div>
    </div>
  );
}
