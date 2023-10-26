
import React from 'react';
import placeholderImage from "../../img/AppStore.png";

const AppStoreBadge = () => {
  const imageUrl = placeholderImage;
  
  return (
    <a
      href="/" // Replace with the actual link to your app on the App Store
      target="/" // Open the link in a new tab/window
      rel=" /" // Security best practice for opening links in a new tab
    >
      <img
        src={imageUrl} // Replace with the actual path to your App Store badge image
        alt='AppStore'
        style={{ width: "140px", height: "50px" }}
      />
    </a>
  );
};

export default AppStoreBadge;
