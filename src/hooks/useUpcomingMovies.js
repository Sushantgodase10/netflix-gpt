import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/moviesSlice";


const useUpcomingMoies =  () => {
    const dispatch = useDispatch();

    // Fetch data from the TMDB APi and update store

    const getUpcomingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json);
      dispatch(addUpcomingMovies(json.results))
    };
  
    useEffect(() => {
      getUpcomingMovies();
    }, []);
  
};


export default  useUpcomingMoies;
 