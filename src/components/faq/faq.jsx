import "./faq.css"
import FaqCard from "../faqCard/faqCard";
import React from "react";

export default function projectCard(){

    return(
        <div className="faq">
            <h2>Časté <span className="faqGradient">dotazy</span></h2>
            <FaqCard/>
        </div>
    )
}