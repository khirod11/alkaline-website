import React from 'react';
import './OurProducts.scss';

import product1 from '../../assets/bottle3.png';
import product2 from '../../assets/bottle4.png';
import product3 from '../../assets/bottle5.png';

import { MdArrowOutward } from "react-icons/md";

const products = [
  { image: product1, label: 'Alkaline Bottle 1L' },
  { image: product2, label: 'Alkaline Bottle 1L' },
  { image: product3, label: 'Alkaline Bottle 1L' },
];

const OurProducts = () => {
  return (
    <section className="products-section">
      <h2>Our Products</h2>
      <p className="subheading">Choose your favorite bottle that fits your healthy lifestyle</p>

      <div className="products-wrapper">

        <div className="products-grid">
          {products.map((product, index) => (
            <div
              className={`product-card ${index === 1 ? 'center-card' : ''}`}
              key={index}
            >
              <img src={product.image} alt={`Product ${index}`} />
              <p className="label-with-icon">
                {product.label} <MdArrowOutward className="arrow-icon" />
              </p>
            </div>
          ))}
        </div>
      </div>

      <button className="view-btn">View Product</button>
    </section>
  );
};

export default OurProducts;
