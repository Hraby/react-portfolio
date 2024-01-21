import Home from "./pages/HomePage";
import ProjectDetail from "./pages/ProjectDetailPage"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AboutMePage from "./pages/AboutMePage";

export default function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route path="/projects/:name" element={<ProjectDetail/>} />
                    <Route path="/about-me" element={<AboutMePage/>} />
                </Routes>
            </div>
        </Router>
    );
}
