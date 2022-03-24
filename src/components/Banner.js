import React, { useEffect, useState } from 'react'
import requests from './request'
import Nav from './Nav'

import "../components-css/Banner.css"
import "../components-css/Nav.css"


const randIndex = (arr_length) => {
    return Math.floor(Math.random() * arr_length - 1)
}

const truncate = (characters, end) => {
    return characters?.length > end ? characters.substr(0, end) + "...":characters
}


const Banner = () => {
    const baseUrl = "https://image.tmdb.org/t/p/original";
    const [movie, setMovie] = useState({})

    useEffect(() => {
        fetch(requests.fetchNetflixOriginals)
        .then(res => res.json())
        .then(data => {
            setMovie(data.results[randIndex(data.results.length)])
        })
        .catch(err => console.log(err))

    }, [])

    const headerStyle = {
        backgroundImage:`url(${baseUrl}${movie?.backdrop_path})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center center"
    }

    return (
        <header className="banner" style={{...headerStyle}}>
            <div className="container banner_container">
                <Nav />

                <div className="movie_info_container spacing_medium">
                    <h1>{movie?.name || movie?.title || movie?.original_name}</h1>

                    <div className="banner_buttons">
                        <button>play</button>
                        <button>my list</button> 
                    </div>

                    <p className="banner_overview">{truncate(movie?.overview, 250)}</p>
                </div>
            </div>
            
        </header>
    )
}

export default Banner
