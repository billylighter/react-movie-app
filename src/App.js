import {useEffect, useState} from 'react';
import './App.css';

// d8e2bd80

const API_URL = 'http://www.omdbapi.com?apikey=d8e2bd80'

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    console.log(data.Search);
    setMovies(data.Search);
  }

  useEffect(() => {

   searchMovies(searchTerm);

  })

  return (
    <div className="App">
      
      <h1>
        App movie name
      </h1>
    
      <hr/>

      <div>
        <input 
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}/>
        <button>Search</button>
      </div>

      <hr/>

      

    {
      movies?.length > 0 ? (
          <div className='movies-row'>
            {movies.map((movie, index) => (
              <div className='movie-card' key={index}>
                
                  <div>
                    <strong>
                      {movie.Title}
                    </strong>
                    <p>
                      Year: <b>{movie.Year}</b>
                    </p>
                    <p>
                      Type: <b>{movie.Type}</b>
                    </p>
                  </div>
                  <div>
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} draggable='false'/>
                  </div>
                
              </div>
            ))}
          </div>
        ) : (
          <div>
            EMPTY!
          </div>
        )
    }
      

    </div>
  );
}

export default App;
