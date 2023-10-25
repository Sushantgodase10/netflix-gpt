import React from "react";
import Header from "./Header";
import useNowPlayingMoies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopMovies from "../hooks/useTopMovies";
import useUpcomingMoies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMoies();
  usePopularMovies();
  useTopMovies();
  useUpcomingMoies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

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
