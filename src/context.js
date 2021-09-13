import React, { useContext, useState } from "react";
import useFetch from "./useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("tom and jerry");
  const { loading, error, data: movies } = useFetch(`&s=${query}`);

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
