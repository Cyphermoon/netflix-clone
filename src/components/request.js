let API_KEY  = "111681e5ed96e0ea5c6dc35a9b50ca24"

let requests = {
    fetchNetflixOriginals:`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_neworks=213`,
    fetchTrendingMovies:`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`,
    fetchRomanceMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchDocumentariesMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchCrimeMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=80`
}

export default requests