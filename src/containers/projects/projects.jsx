import React from "react"
import "./projects.css"
import ProjectCard from "../../components/projectCard/projectCard"
import {projects} from "../../data"
import {motion, useAnimation} from "framer-motion"

export default function Projects(){
    const controls = useAnimation();

    React.useEffect(() => {
        controls.start({ scale: 1, opacity: 1, x: 0 });
    });

    return(
        <div className="projects" id="projects">
            <motion.div
                initial={{ scale: 1, opacity: 0, x: -50 }}
                animate={controls}
                transition={{ duration: 0.25, delay: 0.5 }}
                viewport={{once: false}}
            >
                <h2>Jak to může <span className="gradient">vypadat</span></h2>
            </motion.div>
            <motion.div
                initial={{ scale: 1, opacity: 0, y: 50 }}
                animate={{scale: 1, opacity: 1, y: 0}}
                transition={{ duration: 0.25, delay: 0.5 }}
                viewport={{once: false}}
            >
                <div className="projectsCard">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.name}
                            name={project.title}
                            desc={project.shortDescription}
                            img={project.img}
                            link={`/projects/${project.name}`}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    )
}