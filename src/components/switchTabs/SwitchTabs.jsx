import React,{useState} from "react";

import "./style.scss";
const SwitchTabs = (props)=> {
    const [selectedTab,setSelectedtab]= useState(0);
    const [left,setLeft] = useState(0);

    const activeTab = (tab,index)=> {
        setLeft(index *100);
        setTimeout(() => {
            setSelectedtab(index)
        }, 300);
        props.onTabChange(tab,index)
    }
  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {props.data.map((tab, index) => (
          <span key={index} className={`tabItem ${selectedTab===index ?"active":""}`} onClick={()=>activeTab(tab,index)}>{tab}</span>
        ))}
        <span className="movingBg" style={{left}}/>
      </div>
    </div>
  );
};

export default SwitchTabs;
