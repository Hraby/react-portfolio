import React from "react";
import "./footer.css"
import {motion} from "framer-motion";

export default function Footer() {
    return (
        <div className="footer">
            <div className="leftContent">
                <span>Michal Hrabal</span>
                <p>Tvorba webových stránek</p>
            </div>
            <div className="rightContent">
                <span>Kontakt</span>
                <a>info@michalhrabal.cz</a>
                <a>Linkedin</a>
            </div>
        </div>
    );
}
