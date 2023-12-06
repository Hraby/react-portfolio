import Home from "./pages/HomePage";
import Carousel from "./pages/CarouselPage"
import ProjectDetail from "./pages/ProjectDetailPage"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/carousel" element={<Carousel />}/>
                    <Route path="/projects/:name" element={<ProjectDetail/>} />
                </Routes>
            </div>
        </Router>
    );
}
