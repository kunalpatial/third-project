
import { Formik, Form, Field } from "formik";
import "./Checkout.scss";

const Checkout = () => {
  const initialValues = {
    name: "",
    address: "",
    phone: "",
    email: "",
    city: "",
    zip: "",
    payment: "cod",
  };

  const handleSubmit = (values) => {
    console.log("Checkout Data:", values);
    alert("Order Placed Successfully ");
  };

  return (
    <div className="checkout-container">
      <h2>CHECKOUT FORM</h2>
      
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form>
            <label>Full Name</label>
            <Field type="text" name="name"
             required />

            <label>Address</label>
            <Field as="textarea" name="address" 
            required />

            <label>Phone</label>
            <Field type="tel" name="phone" 
            required />

            <label>Email</label>
            <Field type="email" name="email"
             required />

            <label>City</label>
            <Field type="text" name="city" 
            required />

            <label>Zip Code</label>
            <Field type="text" name="zip"
             required />

            <label>Payment Method</label>
            <Field as="select" name="payment">
              <option value="cod">Cash on Delivery</option>
              <option value="card">Credit/Debit Card</option>
              <option value="upi">UPI</option>
            </Field>

            <button type="submit">Place Order</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Checkout;
