import React from "react"
import "./contact.css"
import {motion} from "framer-motion";

export default function Projects(){
    return(
        <motion.div
            initial={{ scale: 1, opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0}}
            transition={{ duration: 0.25}}
            viewport={{once: false}}
        >
            <a className="mail" href="mailto:test@test.cz">info@michalhrabal.cz</a>
        </motion.div>
    )
}