import React, { useContext, useState, useEffect } from "react";

export const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}&batman`;
console.log(API_ENDPOINT);

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="">{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
