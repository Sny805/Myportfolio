import React from "react";
import "./intro.css"
import man  from "../img/man.jpg";

export default function Intro() {

    return (<>
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello,My name is </h2>
                    <h1 className="i-name">Sunny Kumar Mahto </h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Content Creater</div>
                            <div className="i-title-item">Software Engineer</div>
                            <div className="i-title-item">Java Developer</div>


                        </div>
                    </div>
                    <div className="i-desc">
                     Hey! this is sunny kumar
                     mahto. A passionate coder and 
                     front-End developer. Innovative,
                     dedicated towards his work and 
                     believe in perfection.
                     I design and develop services for customers of all sizes,specializing
                     in creating stylish,modern websites,web services and online stores
                    </div>
                </div>
            </div>
            
            <div className="i-right">
            <div className="i-bg"></div>
              <img src={man} alt="" className="i-image" />
            </div>
        </div>




    </>);

}