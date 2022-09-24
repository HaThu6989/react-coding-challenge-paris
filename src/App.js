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
// https://github.com/ameyerfr/coding-challenge-paris/commit/714b8d9c3116e9e52dce877068b1c57f4f1737e8#diff-04a86f3a47f92035cabcf278df14e9fa04f5d8b095a6c015034981f296d41fa9
//https://github.com/yuuumiao/coding-challenge-paris/blob/master/my-app/src/components/NavMain.jsx
export default App;
