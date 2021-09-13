import React from "react";
import "./movies.scss";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png";

function Movies() {
  const { loading, movies } = useGlobalContext();
  if (loading) {
    return (
      <div className="loading">
        <h2>Loading</h2>
      </div>
    );
  }
  console.log(movies);
  return (
    <section className="movies">
      {movies.map((movie) => {
        const { imdbID: id, Title: title, Poster: poster, Year: year } = movie;
        return (
          <Link to={`/${id}`} key={id} className="movie">
            <div className="poster-box">
              <img src={poster === "N/A" ? url : poster} alt={title} />
            </div>
            <div className="info-box">
              <h3>{title}</h3>
              <p>{year}</p>
            </div>
          </Link>
        );
      })}
    </section>
  );
}

export default Movies;
