import React, { useState } from "react";
import "./Product.css";

const Product = () => {
  const products = [
    { name: "Notebook", price: 50, category: "Stationery" },
    { name: "Pen", price: 20, category: "Stationery" },
    { name: "Laptop", price: 60000, category: "Electronics" },
    { name: "Headphones", price: 1500, category: "Electronics" },
    { name: "Handbag", price: 800, category: "Bags" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Stationery", "Bags", "Electronics"];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="prod-con">

      <div className="cate-but">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`category-btn ${
              selectedCategory === cat ? "active" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-list">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-card">
            <h4>{product.name}</h4>
            <p>Price: ₹{product.price}</p>
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;

