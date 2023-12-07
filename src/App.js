import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddCart from "./pages/AddCart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<AddCart />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
