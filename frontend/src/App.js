import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar"

function App() {
  return <div className="App">
    <Navbar />
    <Home />
    <About />
  </div>;
}

export default App;
