import React from "react";
import { Link } from 'react-router-dom';
import "./navbar.css"
import {motion, useAnimation} from "framer-motion";
import { HashLink } from 'react-router-hash-link';


export default function Menu() {
    const controls = useAnimation();

    React.useEffect(() => {
        controls.start({ scale: 1, opacity: 1, y: 0 });
    }, []);
    return (
        <motion.div
            className="App-header-content"
            initial={{ scale: 1, opacity: 0, y: -50 }}
            animate={controls}
            transition={{ duration: 0.25, delay: 0.5 }}
        >
            <a><Link to="/">Michal Hrabal</Link></a>
            <nav className="Menu">
                <ul>
                    <li><HashLink smooth to="/#projects">Projekty</HashLink></li>
                    <li><HashLink smooth to="/#about-me">O mně</HashLink></li>
                    <li><HashLink smooth to="/#contact">Kontakt</HashLink></li>
                </ul>
            </nav>
        </motion.div>
    );
}

