import React from "react";
import "./search.scss";
import { useGlobalContext } from "../../context";

function Search() {
  const { query, setQuery, error } = useGlobalContext();
  const handleChange = (e) => setQuery(e.target.value);
  return (
    <section className="search">
      <h1>Search Movies</h1>
      <input type="text" onChange={handleChange} value={query} />
      {error.show && <p>{error.message}</p>}
    </section>
  );
}

export default Search;
