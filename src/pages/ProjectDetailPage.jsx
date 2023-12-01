import Menu from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import { useParams } from 'react-router-dom'
import { useEffect } from "react"
import ProjectImg from "../../public/project1.png"
import "../index.css"

const projects = [
    { name: 'project1', title: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet, consectetuer' },
    { name: 'project2', title: 'Lorem ipsum 2', description: 'Lorem ipsum dolor sit amet, consectetuer' }
];

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
                <div className="section">
                    <div className="projectDetail">
                        <h1>{project.name}</h1>
                        <span>{project.description}</span>
                    </div>
                    <div className="projectImg">
                        <img src={ProjectImg} alt=""/>
                    </div>
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}