import useFetch from "../../useFetch";
import "./singleMovie.scss";
import { useParams, Link } from "react-router-dom";

function SingleMovie() {
  const { id } = useParams();
  const { loading, error, data: movie } = useFetch(`&i=${id}`);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error.show) {
    return (
      <div className="error">
        <h2>{error.message}</h2>
        <Link to="/" className="back">
          Go back to search
        </Link>
      </div>
    );
  }
  const {
    Year: year,
    Title: title,
    imdbRating: rating,
    Plot: plot,
    Poster: poster,
  } = movie;
  return (
    <section className="singleMovie">
      <div className="container">
        <div className="left">
          <img src={poster} alt="" />
        </div>
        <div className="right">
          <h2 className="title">{title}</h2>
          <p className="year">{year}</p>
          <p className="rating">{rating}</p>
          <p className="plot">{plot}</p>
        </div>
      </div>
    </section>
  );
}

export default SingleMovie;
