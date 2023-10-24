import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMoviesTrailer = (movieId) => {
    const dispatch = useDispatch();
    // fetch trailer video   &&  updating  the with trailer video data
    // const getMovieVideos = async () => {
    //   const data = await fetch(
    //     "https://api.themoviedb.org/3/movie/299054/videos?language=en-US",
    //     API_OPTIONS
    //   );
  
    //   const json = await data.json();
    //   console.log(json);
      const getMovieVideos = async () => {
             const data = await fetch(
                "https://api.themoviedb.org/3/movie/" +
                 movieId +
                 "/videos?language=en-US",
                API_OPTIONS
              );
              const json = await data.json();
  
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      console.log(trailer);
      dispatch(addTrailerVideo(trailer));
    };
  
    useEffect(() => {
      getMovieVideos();
    }, []);
  

}

export default useMoviesTrailer;





// const useMovieTrailer = (movieId) => {
//     const dispatch = useDispatch();
  
//     const trailerVideo = useSelector((store) => store.movies.trailerVideo);
  
//     const getMovieVideos = async () => {
//       const data = await fetch(
//         "https://api.themoviedb.org/3/movie/" +
//           movieId +
//           "/videos?language=en-US",
//         API_OPTIONS
//       );
//       const json = await data.json();
  
//       const filterData = json.results.filter((video) => video.type === "Trailer");
//       const trailer = filterData.length ? filterData[0] : json.results[0];
//       dispatch(addTrailerVideo(trailer));
//     };
//     useEffect(() => {
//       !trailerVideo && getMovieVideos();
//     }, []);
//   };
  
//   export default useMovieTrailer;