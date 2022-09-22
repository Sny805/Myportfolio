import React from "react";
import "./Projects.css";
export default function Projects(props) {
    return (
        <>
            <div className="p">
                <div className="text">
                    <h2>{props.title}</h2>
                    <p>{props.desc}</p>
                </div>
                <div className="image">
                    <img src={props.img} alt="" />
                </div>
            </div>
        </>
    )
}
