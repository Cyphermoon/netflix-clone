import './App.css';
import Banner from './components/Banner';
import requests from './components/request';
import Row from './components/Row';

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="spacing_small">
        <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
        <Row title="Trending Movies" fetchUrl={requests.fetchTrendingMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />
        <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentariesMovies} />
      </div>
    </div>
  );
}

export default App;
