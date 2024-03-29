import React from "react"
import "./projectCard.css"
import { Link } from 'react-router-dom';
import Arrow from "../../assets/greenArrow.svg"

export default function projectCard(props){
    const {img, name, desc, link} = props;

    return(
        <div className="projectCard">
            <div className="projectBg">
                <img className="projectImg" src={`/${img}`} alt=""/>
                <h2>{name}</h2>
                <div className="projectCard-info">
                    <p>{desc}</p>
                    <Link className="projectBtn" to={link}><img src={Arrow} alt=""/></Link>
                </div>
            </div>
        </div>
    )
}