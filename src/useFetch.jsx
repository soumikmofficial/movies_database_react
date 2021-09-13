import React, { useState, useEffect } from "react";
const API_ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

function useFetch(urlParams) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, message: "" });
  const [data, setData] = useState(null);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setData(data.Search || data);
        setError({ show: false, message: "" });
      } else {
        setError({ show: true, message: data.Error });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);
  return { loading, error, data };
}

export default useFetch;
