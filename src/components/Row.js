import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"

import "../components-css/Row.css"


const Row = ({ title, fetchUrl, isLargeRow=false }) => {
  const base_url = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")

  const getMovieName = (movieName) => {
    console.log(movieName)
    if(trailerUrl) setTrailerUrl("");
    else{
      movieTrailer(movieName || "")
      .then(url => {
        console.log(url)
        let param = new URLSearchParams(new URL(url).search)
        let trailerId = param.get("v")
        console.log(trailerId)

        setTrailerUrl(trailerId)
      })
      .catch((err) => {
        console.error(err)
      })
    }
    
  }

  const options = {
    width:"100%",
    height:"300px",
    
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },

  }

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        setMovies(results);
      })
      .catch((err) => console.error(err));
  }, [fetchUrl]);
  

  return (
    <div className="poster_row">
      <h3>{title}</h3>

      <div className="movie_list">
        {movies.map(({ poster_path, title, name, backdrop_path }, index) => {
          return (
            <img
              key={index}
              src={`${base_url}${isLargeRow ? poster_path : backdrop_path}`}
              onClick={() => getMovieName(title || name)}
              alt={title}
              className={`movie_list_img ${isLargeRow && "movie_list_img_large" }`}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube  videoId={trailerUrl} opts={options}/>}
    </div>
  );
};



export default Row;
