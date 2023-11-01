import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./pages/contact"

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
              <div className="App">
                  <Navbar/>
                  <Switch>
                      <Route path="/" exact component={Home} />
                      <Route path="/pages/contact" component={Contact} />
                  </Switch>
              </div>
          </Router>
      </header>
    </div>
  );
}

function Home(){
    return(<h1>Hello World</h1>)
}
