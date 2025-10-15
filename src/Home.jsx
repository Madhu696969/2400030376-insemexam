import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h2> Product List with Category Filter</h2>
      <p>Click below to see all products with category filter:</p>

      <Link to="/Product">
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Click Me
        </button>
      </Link>
    </div>
  );
};

export default Home;
