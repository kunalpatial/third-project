
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Details.scss";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:7000/products/${id}`)
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
              : `http://localhost:7000${product.img}`
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

        <button className="buy-btn">Add to Cart</button>
      </div>

    </div>
  );
};

export default Details;