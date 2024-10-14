import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import NavBar from "./Components/NavBar";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>Teste</h1>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
