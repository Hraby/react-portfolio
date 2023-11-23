import React from "react";
import { Link } from 'react-router-dom';
import "./navbar.css"

export default function Menu() {
    return (
        <div className="App-header-content">
            <a><Link to="/">Michal Hrabal</Link></a>
            <nav className="Menu">
                <ul>
                    <li><Link to="/">Projekty</Link></li>
                    <li><Link to="/">O mně</Link></li>
                    <li><Link to="/">Kontakt</Link></li>
                    <li><Link to="/carousel"><s>Carousel</s></Link></li>
                </ul>
            </nav>
        </div>
    );
}
