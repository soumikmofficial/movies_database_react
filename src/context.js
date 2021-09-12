import React, { useContext, useState, useEffect } from "react";

export const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&batman`;
console.log(API_ENDPOINT);

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, message: "" });
  const [movies, setMovies] = useState([]);
  const [query, setquery] = useState("");

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        error,
        setError,
        movies,
        setMovies,
        query,
        setquery,
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
