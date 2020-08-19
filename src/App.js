import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Input from "./components/Input";
import MovieList from "./components/MovieList";
import Header from "./components/Header";

const url =
  "https://api.themoviedb.org/3/movie/550?api_key=d242ba2904962671a013d57ae72adc98&language=en-US";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res);
      setMovies([res.data]);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Input />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
