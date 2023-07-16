import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

import { fetchDataFromApi } from "./utils/api";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Detail from "./pages/details/Detail";
import SearchResult from "./pages/searchresult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  const { url } = useSelector((state) => state.home);
  console.log(url);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res);
      const url = {
        backdrop:res.images.secure_base_url + "original",
        poster:res.images.secure_base_url + "original",
        profile:res.images.secure_base_url + "original",
      }
      dispatch(getApiConfiguration(url));
    });
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Detail />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediatype" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
