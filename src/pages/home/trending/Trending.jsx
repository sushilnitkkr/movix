import React,{useState} from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/UseFetch";

const Trending = () => {

const [endpoint,setEndpoint]=useState("day");

const {data,loading} = useFetch(`/trending/movie/${endpoint}`);

    const onTabChange = (tab)=>{
    setEndpoint(tab==="Day"?"day":"week");
    }
  return (
    <div className="carouselSction">
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data = {["Day","Week","Month"]} onTabChange = {onTabChange}/>
      </ContentWrapper>
    </div>
  );
};

export default Trending;
