import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Team from "./components/Team/Team";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <News />
      <Team />
    </div>
  );
}

export default App;
