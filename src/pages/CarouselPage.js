import Carousel from "../components/carousel/carousel"
import Menu from "../components/navbar/navbar"

export default function HomePage() {
    return (
        <div className="App">
            <header>
                <Menu/>
            </header>
            <main>
                <Carousel/>
            </main>
        </div>
    );
}
