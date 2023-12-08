import Hero from "../components/hero/hero"
import Menu from "../components/navbar/navbar"
import Stats from "../components/stats/stats"
import Projects from "../containers/projects/projects"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"
import Faq from "../components/faq/faq"
import "../index.css"
import { useEffect } from "react"

export default function HomePage() {
    useEffect(() => {
        document.title = "Michal Hrabal"
      }, [])

    return (
        <div className="App">
            <header>
                <Menu/>
            </header>
            <main>
                <div className="section">
                    <Hero/>
                </div>
                <div className="section">
                    <Stats/>
                </div>
                <div className="section">
                    <Projects/>
                </div>
                <div className="section">
                    <Faq/>
                </div>
                <div className="section">
                    <Contact/>
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}
