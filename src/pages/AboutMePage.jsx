import Menu from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import AboutMe from "../components/aboutMe/aboutMe"

export default function AboutMePage() {
    return (
        <div className="App">
            <header>
                <Menu/>
            </header>
            <main>
                <section className="section">
                    <AboutMe/>
                </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}
