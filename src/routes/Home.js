import { useEffect, useState } from "react";
import Movie from "../components/movie.js";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // 요새는 then 을 쓰지 않음. 대신 async await를 사용함.
  /*
  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoading(false);
      });
  }, []);
  */

  // 요즘 사용하는 async await 이용
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
