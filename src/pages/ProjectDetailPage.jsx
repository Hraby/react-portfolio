import Menu from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import Contact from "../components/contact/contact"
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
                <section className="section">
                    <ProjectDetail name={project.name} shortDescription={project.shortDescription} description={project.description} img={project.img} />
                </section>
                <section className="section">
                    <Contact/>
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}