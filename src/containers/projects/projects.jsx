import React from "react"
import "./projects.css"
import ProjectCard from "../../components/projectCard/projectCard"

export default function Projects(){
    return(
        <div className="projects">
            <h2>Jak to může <span className="gradient">vypadat</span></h2>
            <div className="projectsCard">
                <ProjectCard name="Lorem Ipsum" desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse nisl. Nulla pulvinar eleifend sem. Pellentesque pretium" img="project1.png" link="/project/test"/>
                <ProjectCard name="Lorem Ipsum" desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse nisl. Nulla pulvinar eleifend sem. Pellentesque pretium" img="project1.png" link="/project/test2"/>
            </div>
        </div>
    )
}