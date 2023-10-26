
import React from 'react';
import placeholderImage from "../../img/AppStore.png";

const PlayStoreBadge = () => {
  const imageUrl = placeholderImage;
  return (
    <a
      href="/" // Replace with the actual link to your app on Play Store
      target="/" // Open the link in a new tab/window
      rel="/" // Security best practice for opening links in a new tab
    >
      <img
       src={imageUrl} // Replace with the actual path to your Play Store badge image
       alt='PlayStore'
       style={{ width: "155px", height: "70px"}}
      />
    </a>
  );
};

export default PlayStoreBadge;
