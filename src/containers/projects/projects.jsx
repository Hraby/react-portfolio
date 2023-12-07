import React from "react"
import "./projects.css"
import ProjectCard from "../../components/projectCard/projectCard"
import {projects} from "../../data"

export default function Projects(){
    return(
        <div className="projects" id="projects">
            <h2>Jak to může <span className="gradient">vypadat</span></h2>
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
        </div>
    )
}