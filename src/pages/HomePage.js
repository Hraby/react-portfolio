import Hero from "../components/hero/hero"
import Menu from "../components/navbar/navbar"

export default function HomePage() {
    return (
        <div className="App">
            <header>
                <Menu/>
            </header>
            <main>
                <Hero/>
            </main>
        </div>
    );
}
