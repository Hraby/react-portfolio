import React from "react";
import "./footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <div className="leftContent">
                <span>Michal Hrabal</span>
                <p>Tvorba webových stránek</p>
            </div>
            <div className="rightContent">
                <span>Kontakt</span>
                <a href="#">info@michalhrabal.cz</a>
                <a href="#">Linkedin</a>
            </div>
        </div>
    );
}
