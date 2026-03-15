
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Capture.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/Cartslice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();


  useEffect(() => {
    axios.get("https://third-project-6s9s.onrender.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
     toast.success(`${product.title} added to cart`);
  };

  return (
    <>
      <div id="product">

        {products.map(p => (

          <div id="pro" key={p.id}>
            <Link id="allproduct"
              to={`/Category/Details/${p.id}`}>

              <img
                src={
                  p.img.startsWith("http")
                    ? p.img
                    : `https://third-project-6s9s.onrender.com${p.img}`
                }
                alt={p.title}
                style={{ width: "100%" }}
              />
              <h3>{p.title}</h3>
              <p>Price: ₹{p.price}</p>
            </Link>
            <div className="adcart">
              <button className="add-cart-btn"
                onClick={() => handleAddToCart(p)}
              >
                Add to Cart
              </button>
            </div>
          </div>

        ))}
      </div>
    </>
  );
};

export default Products;
