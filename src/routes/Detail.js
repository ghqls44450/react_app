import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [currentMovie, setCurrentMovie] = useState("");
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setCurrentMovie(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img
            src={currentMovie.data.movie.medium_cover_image}
            alt="{currentMovie.data.movie.title}"
          />
          <h3> Title : {currentMovie.data.movie.title}</h3>
          <h3> Genres : {currentMovie.data.movie.genres[0]}</h3>
          <h3> Year : {currentMovie.data.movie.year}</h3>
          <h3> Languages : {currentMovie.data.movie.language}</h3>
          <h3>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Go back
            </Link>
          </h3>
        </div>
      )}
    </div>
  );
}

export default Detail;
