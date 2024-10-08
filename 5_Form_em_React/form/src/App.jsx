import { useState } from "react";
import "./App.css";
import MyForms from "./components/MyForms";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h2>Forms</h2>
        <MyForms
          user={{
            name: "Breno",
            email: "breno@gmail.com",
            bio: "Sou um programador HEHE",
            role: "admin",
          }}
        />
      </div>
    </>
  );
}

export default App;
