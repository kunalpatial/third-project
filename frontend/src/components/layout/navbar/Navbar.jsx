
import React, { useState } from 'react'
import "./Navbar.scss"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.cart.length);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* top-header */}
      <div className="top-header ">
        <div className="left-side">
          <ul className="list-unstyled">
            <li><i className="fa-solid fa-headset"></i></li>
            <li><i className="fa-brands fa-atlassian"></i> </li>
            <li><i className="fa-brands fa-playstation"></i></li>
            <li><i className="fa-brands fa-xbox"></i></li>
            <li><i className="fa-brands fa-steam"></i></li>
          </ul>
        </div>
        <div className="right-side">
          <ul className="list-unstyled">
            <NavLink to="/" className="NavLink"><li><i className="fa-solid fa-shield-halved"></i>Lifetime Support</li></NavLink>
            <NavLink to="/" className="NavLink"><li><i className="fa-regular fa-comment"></i>Chat</li></NavLink>
            <NavLink to="Signin" className="NavLink"><li><i className="fa-solid fa-user"></i>Sign in</li></NavLink>
            <NavLink to="/" className="NavLink"><li>Contact</li></NavLink>
          </ul>
        </div>
      </div>

      {/* Navbar */}
      <div className="Navbar">
        <div className="content">
          <div className="logo">
            <NavLink to="Origin" className="NavLink">
               <img src="/assets/origin-logo.svg" alt="logo" />
              
            </NavLink>
          </div>
          <ul className="list-unstyled d-none d-xxl-flex">
            <NavLink to="/Accesories" className="NavLink"><li>ACCESORIES</li></NavLink>
            <NavLink to="/Accesories" className="NavLink"><li>GAMING PCS</li></NavLink>
            <NavLink to="/Accesories" className="NavLink"><li>GAMING LAPTOPS</li></NavLink>
            <NavLink to="/Accesories" className="NavLink"><li>PREBUILT PCS</li></NavLink>
            <NavLink to="/Accesories" className="NavLink"><li>WORKSTATONS</li></NavLink>
            <NavLink to="/Accesories" className="NavLink"><li>SHOP BY</li></NavLink>
            <NavLink to="/Accesories" className="NavLink"><li>OFFERS</li></NavLink>
            <NavLink to="/Accesories" className="NavLink"><li>MORE</li></NavLink>
          </ul>
          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="cart">
            <NavLink to="Cart" className="NavLink">
              <i className="fa-solid fa-cart-shopping"></i>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </NavLink>
          </div>
          <button className="btn d-xxl-none" type="button" onClick={toggleMenu}>
            <i className="fa-solid fa-bars fs-3"></i>
          </button>
        </div>
      </div>

      {/* Custom Offcanvas Menu */}
      <div className={`custom-offcanvas ${isOpen ? "show" : ""}`}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button className="close-btn" onClick={closeMenu}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <NavLink to="/Accesories" className="NavLink" onClick={closeMenu}><li>ACCESORIES</li></NavLink>
            <NavLink to="/Accesories" className="NavLink" onClick={closeMenu}><li>GAMING PCS</li></NavLink>
            <NavLink to="/Accesories" className="NavLink" onClick={closeMenu}><li>GAMING LAPTOPS</li></NavLink>
            <NavLink to="/Accesories" className="NavLink" onClick={closeMenu}><li>PREBUILT PCS</li></NavLink>
            <NavLink to="/Accesories" className="NavLink" onClick={closeMenu}><li>WORKSTATONS</li></NavLink>
            <NavLink to="/Accesories" className="NavLink" onClick={closeMenu}><li>SHOP BY</li></NavLink>
            <NavLink to="/Accesories" className="NavLink" onClick={closeMenu}><li>OFFERS</li></NavLink>
            <NavLink to="/Accesories" className="NavLink" onClick={closeMenu}><li>MORE</li></NavLink>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
