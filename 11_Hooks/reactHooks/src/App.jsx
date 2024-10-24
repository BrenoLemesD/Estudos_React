import "./App.css";

import { useState } from "react";

//Troca de pagina de recarregar a aplicação
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>React Hooks</h1>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
