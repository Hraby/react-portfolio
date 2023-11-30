import Menu from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import { useParams } from 'react-router-dom';
import { useEffect } from "react"

const projects = [
    { name: 'project1', description: 'Description of project 1' },
    { name: 'project2', description: 'Description of project 2' }
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
                <h1>{project.name}</h1>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}