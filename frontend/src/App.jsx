import Layout from "./components/layout/Layout"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Origin from "./pages/Origin/Origin"
import { Signin } from "./pages/signin/Signin"
import Account from "./pages/new account/Account"
import { Accesories } from "./pages/accesories/Accesories"
import Capture from "./pages/accesories/Capture/Capture"
import Category from "./pages/accesories/Category"
import Display from "./pages/accesories/Display/Display"
import Cart from "./pages/accesories/Cart/Cart"
import Checkout from "./pages/checkout/Checkout"
import Details from "./pages/accesories/Details/Details"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      { index: true, element: <Origin /> },
      { path: "Origin", element: <Origin /> },
      { path: "Signin", element: <Signin /> },
      { path: "Signin/Account", element: <Account /> },
      { path: "Cart", element: <Cart /> },
      { path: "Checkout", element: <Checkout /> },
      {
        path: "Accesories", element: <Accesories />,
        children: [
          { index: true, element: <Capture /> },
        ]
      },

      {
        path: "Category",
        element: <Category />,
        children: [
          { path: "Display", element: <Display /> },
          { path: "Capture", element: <Capture />},
             { path: "Details/:id", element: <Details /> } 
          


        ]
      }
    ]


  },

]);

function App() {


  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App
