import React from "react";
import { useState } from "react";
import axios from "axios";

const Form = ({ setIsOpen }) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [isSignUp, setIsSignUP] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Matches your router.post("/signUp", ...) exactly
    let endpoint = isSignUp ? "signUp" : "login";

    const { email, password } = data;

    try {
      // 2. Changed port to 3000 to match your server.js PORT logic
      const res = await axios.post(`http://localhost:3000/${endpoint}`, {
        email,
        password,
      });

      // 3. Store the token and user info from your successful response
      localStorage.setItem("TOKEN", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // 4. Close the modal using the prop passed from Navbar
      setIsOpen(false);

      // 5. Refresh to update the UI (Navbar, etc.)
      window.location.reload();
    } catch (err) {
      // 6. Access the 'message' property sent by your controller
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form className="flex flex-col space-y-6 mt-10" onSubmit={handleSubmit}>
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
        <p className="text-gray-500 text-sm">Please enter your details</p>
      </div>

      <div className="flex flex-col space-y-1">
        <label className="text-sm font-semibold text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          placeholder="name@example.com"
          onChange={handleChange}
          name="email"
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-black"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label className="text-sm font-semibold text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          placeholder="••••••••"
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-black"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg shadow-lg shadow-emerald-200 transition-all active:scale-[0.98]"
      >
        {isSignUp ? "SignUp" : "Login"}
      </button>
      {error && <p>{error}</p>}

      {!isSignUp ? (
        <p
          className="text-center text-sm text-gray-600"
          onClick={() => setIsSignUP(true)}
        >
          Don't have an account?{" "}
          <span className="text-emerald-600 font-bold cursor-pointer hover:underline">
            Create a new Account
          </span>
        </p>
      ) : (
        <p
          className="text-center text-sm text-gray-600"
          onClick={() => setIsSignUP(false)}
        >
          Have an account?.{" "}
          <span className="text-emerald-600 font-bold cursor-pointer hover:underline">
            Login Here
          </span>
        </p>
      )}
    </form>
  );
};

export default Form;
