import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Admin from "./components/Admin/Admin";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/app">
          <div className="App">
            <Navbar />
            <Home />
            <About />
            <News />
            <Team />
            <Footer />
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
