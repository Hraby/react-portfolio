import Menu from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import ProjectDetail from "../components/projectDetail/projectDetail"
import { useParams } from 'react-router-dom'
import { useEffect } from "react"
import {projects} from "../data"
import "../index.css"

export default function ProjectDetailPage(){
    const { name } = useParams();
    useEffect(() => {
        document.title = `Projekty - ${name}`
    }, [name])
    const project = projects.find((p) => p.name === name);

    return(
        <div className="App">
            <header>
                <Menu/>
            </header>
            <main>
                <ProjectDetail name={project.name} shortDescription={project.shortDescription} description={project.description} img={project.img} />
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}