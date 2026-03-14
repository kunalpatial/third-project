
import "./Accesories.scss"
import { NavLink, Outlet } from "react-router-dom"

export const Accesories = () => {
  return (
    <>
      <div className="text">
        <div className="acces">
          <h1>ACCESORIES</h1>
          <p>
            Complete Your ORIGIN PC Experience with High-Quality
            Peripherals, Gear, and More
          </p>
        </div>
      </div>

      <div className="container-fluid m-lg-5 mt-3">
        <div className="row">

          <div id="left-part" className="col-lg-4 col-md-5 col-12">
            <h1>Accessories</h1>
            <h3>SHOP FOR:</h3>

            <h4>ORIGIN PC Special Offers</h4>
            <p>Origin PC Offers</p>

            <h5>ORIGIN PC Exclusive</h5>
            <p>Apparel and Extras</p>

            <h4>Category</h4>

            <ul>
              <NavLink to="/Category/Capture" className="NavLink"><li>Capture Cards</li></NavLink>
              <NavLink to="/Category/Display" className="NavLink"><li>Display</li></NavLink>

            </ul>
          </div>

          <div id="right-part" className="col-lg-8 col-md-7 col-12">
            <p>
              Welcome to the ORIGIN PC Gearshop, where you can get high-quality
              accessories including keyboards, mice, monitors, power
              accessories, case extras, and more!
            </p>

            <h6>READ MORE</h6>
            <h2>Newest arrivals</h2>

            <Outlet />
          </div>

        </div>
      </div>
    </>
  )
}