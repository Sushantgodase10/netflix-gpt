import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { BG_URL, PRO_URL } from "../utils/constants";
import placeholderImage from "../components/img/mobile-v.jpg";
import placeholderImage2 from "../components/img/icons8-download-48.png";
import Footer from "./Footer";

const Login = () => {


  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const imageUrl = placeholderImage;
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PRO_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img
            className="min-h-screen object-covers opacity-100"
            src={BG_URL}
            alt="logo"
          />
        </div>

        <p className="absolute items-stretch text-4xl w-full p-[5%] mx-auto text-center text-white font-extrabold">
          Laughter. Tears. Thrills. Find it all on NetflixGPT.
        </p>
        <p className="absolute  text-lg w-full p-[8%] mx-auto text-center text-white font-bold">
          Unlimited amusement commences at absolutely no cost.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full md:w-3/12 absolute p-6 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
        </form>
      </div>
      <div className="absolute w-full  my-[55.5%] text-white  border-t-4 border-gray-700 bg-black opacity-100 ">
        <div class="flex flex-wrap font-san p-20 justify-center">
          <div class="flex-wrap p-30 w-48  relative ">
            <img src={imageUrl} alt="" loading="lazy" />

            <div className="-mx-6  -m-[30%] bg-black opacity-90 border-4 border-gray-800 rounded-lg ">
              <form className="px-5 py-2 flex flex-row  w-full font-light bg-black   text-white rounded-lg bg-opacity-80">
                <img
                  alt=""
                  className="h-15 w-10"
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                />
                <div>
                  <div class=" m-2 px-4 text-sm font-bold text-white ">
                    Stranger Things
                  </div>
                  <div class="px-3 flex flex-row   m-2 text-sm font-semibold text-blue-800">
                    Downloading...
                    <img
                      className="-m-0 mx-2 h-5 w-5 "
                      src={placeholderImage2}
                      alt=""
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <form className="flex font-san ">
            <div className="py-20 px-4 m-">
              <p className="items-stretch text-4xl p-5 w-full mx-auto text-center font-extrabold">
                Download your shows to watch offline
              </p>
              <p className="text-lg w-full  mx-auto text-center font-bold">
                Save your favourites easily and always have something to watch.
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute w-full  my-[84.5%] text-white border-t-4 border-gray-700  bg-black opacity-100 ">
        <div class="flex flex-wrap font-san p-20 justify-center">
          <form className="flex font-san ">
            <div className="py-20 px-0 m-0">
              <p className="items-stretch text-5xl p-5 px-0 w-full mx-auto text-center font-extrabold">
                Watch everywhere
              </p>
              <p className="text-lg w-full  mx-auto text-center font-bold">
                Stream unlimited movies on your phone, tablet and laptop.
              </p>
            </div>
            <div>
              <img
                alt=""
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"

              />
              </div>
          </form>
        </div>
      </div>
      <div className="absolute w-full  my-[122.5%] left-0 text-white border-t-4 border-gray-700  bg-black opacity-100 ">
        <Footer />
      </div>
    </>
  );
};
export default Login;
