import About from "./About";
import "./App.css";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Project from "./Project";
import Service from "./Service";
import Navbar from "./Nav/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About />
      <Service />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
