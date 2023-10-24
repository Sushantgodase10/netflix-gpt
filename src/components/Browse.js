import React from "react";
import Header from "./Header";
import useNowPlayingMoies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  
  useNowPlayingMoies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* - MainContainer
          - video Backround
          - Video title 
      -  SecondaryContainer
          - MovieList
          -  carda */}
    </div>
  );
};

export default Browse;
