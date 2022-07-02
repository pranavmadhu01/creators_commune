import "./App.css";


import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import Totop from "./components/totop/Totop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Totop />
      <Home />
      <About />
      <News />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
