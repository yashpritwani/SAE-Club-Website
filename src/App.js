import './App.css';
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Social from "./components/Social";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Team from "./components/Team";
import CoreTeam from "./components/CoreTeam";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Nav />
        <Social />
        <Switch>
          <Route path="/about/">
            <About />
          </Route>
          <Route path="/team/">
            <Team />
          </Route>
          <Route path="/coreteam/">
            <CoreTeam />
          </Route>

          <Route path="/">
            <Hero />
          </Route>
        </Switch>


      </Router>
        
    </div>
  );
}

export default App;
