import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [eamil, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (eamil === "admin@forest.com" && password === "123456") {
      console.log("came");
      sessionStorage.setItem(
        "authUser",
        JSON.stringify({
          accessToken: "1234567890",
          user: {
            eamil,
            password,
          },
        })
      );
      dispatch(
        userLoggedIn({
          accessToken: "1234567890",
          user: {
            eamil,
            password,
          },
        })
      );
      navigate("/admin");
    } else {
      alert("wrong credientials");
    }
  };
  return (
    <div className="flex items-center h-screen">
      <div className="p-12 bg-white mx-auto rounded-2xl w-full sm:w-3/4 md:w-[60%] lg:w-[40%] shadow-xl  ">
        <div className="mb-4 text-center">
          <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
          <p className="text-gray-400 mt-2">Please sign in to your account.</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-5 text-gray-700">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 tracking-wide">
              Email
            </label>
            <input
              className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              type="email"
              placeholder="mail@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
              Password
            </label>
            <input
              className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center bg-blue-400  hover:bg-blue-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
