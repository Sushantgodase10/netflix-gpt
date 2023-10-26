import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when compount unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle  GPT Search
    dispatch(toggleGptSearchView());
  }

  const handelLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO_URL} alt="logo" />

      {user && (
        <div className="flex p-2 justify-between">
         { showGptSearch && (<select className="py-1 px-4 my-2 bg-gray-900 text-white rounded-lg"
          onChange={handelLanguageChange}
          > {SUPPORTED_LANGUAGES.map((lang) => ( <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
             
          </select>)}
          <button className="py-1 px-4 mx-4 my-2  bg-purple-800 text-white rounded-lg" 
          onClick={handleGptSearchClick}>
           {showGptSearch? "Home" : "GPT Search 🔍"}
          </button>
          <img
            className="hidden md:block w-10 h-10   my-2 rounded-full"
            alt="profile logo"
            src={user?.photoURL}
          />
          <button
            onClick={handleSignOut}
            className="py-1 px-4 mx-4 my-2  bg-red-600 text-white rounded-lg "
          >
           ➡️ Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
