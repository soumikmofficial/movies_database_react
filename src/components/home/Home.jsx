import React from "react";
import "./home.scss";
import { useGlobalContext } from "../../context";
import Search from "../search/Search";
import Movies from "../movies/Movies";

function Home() {
  return (
    <div className="home">
      <Search />
      <Movies />
    </div>
  );
}

export default Home;
