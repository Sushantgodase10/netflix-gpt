import React from "react";
import Header from "./Header";
import {useState} from "react";

function Login() {
 const [isSignInFrom, setIsSignInFrom] = useState(true);
 
 const toggleSignInFrom = () => {
  setIsSignInFrom(!isSignInFrom);
 };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto  right-0 left-0 text-white rounded-lg bg-opacity-75">
        <h1 className="font-bold text-3xl py-4">{isSignInFrom ? "Sign In" : "Sign Up"}</h1>
       {!isSignInFrom && ( <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-600 rounded-md"
        />) }

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-600 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600 rounded-md" 
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">Sign In</button>
        <p className="py-4" onClick={toggleSignInFrom}>{ isSignInFrom ? "New a NetFlix? Sign Up Now" : "Already registered Sign In Now"}</p>
      </form>
      
    </div>
  );
}

export default Login;
