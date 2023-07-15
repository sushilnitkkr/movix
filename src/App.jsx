import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getApiConfiguration,getGenres } from "./store/homeSlice";

import { fetchDataFromApi } from "./utils/api";
function App() {
  const {url} = useSelector((state)=>state.home);
  console.log(url);
  const dispatch = useDispatch();
  useEffect(() => {
    apiTesting();
  },[]);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res))
    });
  };
  return <div className="App">{url.total_pages}</div>;
}

export default App;
