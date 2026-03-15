import { useEffect, useState } from 'react'
import "./Display.scss"
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Cart/Cartslice';
import { toast } from "react-toastify";


const Display = () => {
  const [mouse, setmouse] = useState([]);
  const dispatch = useDispatch();



  useEffect(() => {
    axios.get("https://third-project-6s9s.onrender.com/mouse")
      .then(res => setmouse(res.data))
      .catch(err => console.error(err));
  }, []);
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success(`${item.title} added to cart`);

  };


  return (
    <>
      <div id="mouse">
        {mouse.map(item => (
          <div id="pro" key={item.id}>

            <img
              src={
                item.img?.startsWith("http")
                  ? item.img
                  : `https://third-project-6s9s.onrender.com${item.img}`
              }
              alt={item.title}
              style={{ width: "100%" }}
            />
            <h3>{item.title}</h3>
            <p>Price: ₹{item.price}</p>
            <div className="adcart">
              <button className="add-cart-btn" onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>


    </>
  )
}

export default Display