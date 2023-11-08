import Logo from './logo.svg';
import './App.css';
import Menu from './components/navbar';
import Contact from "./sections/contact"
import Home from "./sections/home";

export default function App() {
  return (
    <div className="App">
        <header className="App-header">
            <div className="App-header-content">
                <a>Michal Hrabal</a>
                <Menu/>
            </div>
        </header>
        <main>
            <Home/>
        </main>
    </div>
  );
}
