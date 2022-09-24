import "./App.css";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Temperature from "./Temperature";
import CustomizeImage from "./CustomizeImage";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/temperature" element={<Temperature />}>
          Temperature
        </Route>
        <Route path="/customize-image" element={<CustomizeImage />}>
          Customize Image
        </Route>
      </Routes>
    </div>
  );
}

export default App;
