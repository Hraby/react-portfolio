import "./faq.css"
import FaqCard from "../faqCard/faqCard";
import React from "react";
import {motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Faq(){
    const controls = useAnimation();

    React.useEffect(() => {
        controls.start({scale: 1, opacity: 1, x: 0});
    })


    return(
        <div className="faq">
            <motion.div
                initial={{ scale: 1, opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0}}
                transition={{ duration: 0.25}}
                viewport={{once: false}}
            >
                <h2>Časté <span className="faqGradient">dotazy</span></h2>
            </motion.div>
            <motion.div
                initial={{ scale: 1, opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 0.5}}
                viewport={{once: false}}
            >
            <FaqCard/>
            </motion.div>
        </div>
    )
}