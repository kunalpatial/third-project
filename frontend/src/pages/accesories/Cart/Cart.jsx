
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "./Cartslice";
import "./Cart.scss"
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const goToCheckout = () => {
    navigate("/Checkout");
  };


  return (
    <div id="shop">
      <h2>Your Cart</h2>


      {cartItems.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div id="post"
              key={item.id}
            >

              <img
                src={
                  item.img.startsWith("http")
                    ? item.img
                    : `https://third-project-6s9s.onrender.com${item.img}`
                }
                alt={item.title}
                style={{ width: "80px", height: "80px", objectFit: "cover", marginRight: "15px" }}
              />
              <div id="text-port" style={{ flex: 1 }}>
                <h4>{item.title}</h4>
                <p>₹{item.price}</p>
              </div>

              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </div>
          ))}
          <div className="clear">
            <h3>Total: ₹{total}</h3>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
          </div>

          <div className="payment">
            <button
              onClick={goToCheckout}
            >
              PLACE ORDER
            </button>


          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
