
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Details.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../Cart/Cartslice";
import { toast } from "react-toastify";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
  

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success(`${item.title} added to cart`);
  };


  useEffect(() => {
    axios
      .get(`https://third-project-6s9s.onrender.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2 className="loading">Loading...</h2>;
  if (!product) return <h2 className="loading">Product not found</h2>;

  return (
    <div className="details-container">

      <div className="details-image">
        <img
          src={
            product.img?.startsWith("http")
              ? product.img
              : `https://third-project-6s9s.onrender.com${product.img}`
          }
          alt={product.title}
        />
      </div>

      <div className="details-info">
        <h1>{product.title}</h1>

        <p className="price">₹{product.price}</p>

        <p className="desc">{product.description}</p>

        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Stock:</strong> {product.stock}</p>

         <button
          className="buy-btn"
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
};

export default Details;