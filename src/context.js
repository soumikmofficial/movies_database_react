import React, { useContext, useState, useEffect } from "react";
import useFetch from "./useFetch";

// export const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState({ show: false, message: "" });
  // const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("tom and jerry");
  const { loading, error, data: movies } = useFetch(`&s=${query}`);

  // const fetchData = async (url) => {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     if (data.Response === "True") {
  //       setMovies(data.Search);
  //       setError({ show: false, message: "" });
  //     } else {
  //       setMovies([...movies]);
  //       setError({ show: true, message: data.Error });
  //     }
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData(`${API_ENDPOINT}&s=${query}`);
  // }, [query]);

  return (
    <AppContext.Provider
      value={{
        loading,
        error,
        movies,
        query,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
