import React from "react";
import "./ProjectsList.css";
import Projects from "../Projects/Projects";
import Data from "./data";
export default function ProjectsList() {
  return (
    <>
      <div className="pl">
        <div className="pl-text">
          <h1 className="pl-title">Projects Using HTML CSS JAVASCRIPT AND REACT JS</h1>
          <h2 className="pl-desc">Following are the Projects done by me</h2>
        </div>
 
        <div className="pl-list">
          {Data.map((value)=>{
            return <Projects  img={value.img} title={value.title} desc={value.desc}/>
          })}
          
          
        </div>

      </div>
    </>
  );
}
