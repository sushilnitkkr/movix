import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import useFetch from "../../../hooks/UseFetch";
const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const {data,loading} = useFetch("/movie/upcoming"); // calling main movie api to get data and will destruct data {data, loading}
  
  useEffect(()=>{
     const bg = data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path; 
     // to get random image and even value used Math 
     // ? is a optional chaning if data is not coming will not throw the error and it will wait 
     setBackground(bg)
  },[data])

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`)

    }
  };
  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              onChange={(e)=>setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <button>Search</button>
          </div>
        </div>
      </div>
      S
    </div>
  );
};

export default HeroBanner;
