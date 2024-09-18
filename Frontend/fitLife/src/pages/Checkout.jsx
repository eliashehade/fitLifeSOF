import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../config/Context/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../config/Context/UserContext";

function Checkout() {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  const { user, login } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({
    name: "",
    phoneNumber: "",
    address: "",
  });
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [error, setError] = useState("");

  // Calculate total price
  const total = state.cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePayment = async () => {
    // Validate user details
    if (!userDetails.name || !userDetails.phoneNumber || !userDetails.address) {
      setError("All fields are required.");
      return;
    }

    // Reset error if all fields are valid
    setError("");

    try {
      // Perform payment logic here

      // Check if there's a plan in the cart
      const plan = state.cart.find((item) => item.type === 'Plan');

      if (plan) {
        const planId = plan.id; // Assuming plan ID is available in the cart item
        const userId = user.UserID; // Replace with actual user ID
        const email = user.Email; // Replace with actual user ID
        const name = userDetails.name; // Replace with actual user ID
        const phoneNumber = userDetails.phoneNumber; // Replace with actual user ID
        const userData = JSON.parse(localStorage.getItem("userdata"));
        const token = userData ? userData.token : null;

        // Send request to update user with the selected plan
        const response = await axios.put(
          `http://localhost:3000/api/user/${userId}`, // Replace with actual endpoint
          {
            planId,
            phoneNumber,
            email,
            name
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Assuming JWT is stored in localStorage
            },
          }
        );

        login(response.data);

      }



      // Clear the cart
      dispatch({ type: "CLEAR_CART" });

      // Confirm the payment
      setIsConfirmed(true);
      if (plan) {
        const title = plan.title
        if (title == 'Basic') {
          navigate('/basicPlan')
        }
        else if (title == 'Premium') {
          navigate('/vipplan')
        }
        else {
          navigate('/elplan')
        }
      }
    } catch (err) {
      setError("Error processing payment: " + err.message);
    }
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-svh p-5 py-20">
        {isConfirmed ? (
          <p className="p-2 bg-green-200 text-center mt-3 rounded-lg">
            Payment Successful! Your order is confirmed.
          </p>
        ) : state.cart.length === 0 ? (
          <p className="p-2 bg-white text-center">No items in cart</p>
        ) : (
          <div>
            {/* Cart Items */}
            {state.cart.map((item, i) => (
              <div
                className="p-2 flex bg-black my-5 text-white border-b border-gray-100"
                key={i}
              >
                <div className="p-2 w-60 h-60">
                  <img
                    src={item.imageUrl}
                    alt="img product"
                    className="w-52 h-52"
                  />
                </div>
                <div className="flex-auto text-sm w-32">
                  <div className="font-bold">{item.title}</div>
                  <div className="truncate">{item.description}</div>
                  <div className="text-gray-400">Qt: {item.quantity}</div>
                </div>
                <div className="flex flex-col w-18 font-medium items-end">
                  <div
                    className="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700"
                    onClick={() => removeFromCart(item.id)}
                  >
                    {/* Trash Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-trash-2 "
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      <line x1={10} y1={11} x2={10} y2={17} />
                      <line x1={14} y1={11} x2={14} y2={17} />
                    </svg>
                  </div>
                  ${item.price}
                </div>
              </div>
            ))}
            <div className="bg-gray-100 p-4">
              <p>Total: ${total.toFixed(2)}</p>
            </div>

            {/* User Details Form */}
            <div className="bg-white p-5 mt-5">
              <h3 className="text-lg font-bold mb-3">Enter Your Details</h3>
              {error && <p className="text-red-500 mb-3">{error}</p>}
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={userDetails.name}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  outline-none dark:placeholder-gray-400 my-3"
                required
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={userDetails.phoneNumber}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  outline-none dark:placeholder-gray-400 my-3"
                required
              />
              <textarea
                name="address"
                placeholder="Address"
                value={userDetails.address}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  outline-none dark:placeholder-gray-400 my-3"
                required
              ></textarea>

              <button
                onClick={handlePayment}
                className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-black dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Pay
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
