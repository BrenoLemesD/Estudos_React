import './App.css'
import MyComponents from './components/MyComponents'
import {useState} from 'react'
import Title from './components/Title'

function App() {

  const n = 10
  const [name] = useState("Breno")

  const redTitle = true

  return (
    <>
      <div className="App">
        {/* Css global */}
        <h1>React com Css</h1>
        {/* Css de componente */}
        <MyComponents />
        <p>Este paragrafo é do App.js</p>
        {/* Css Inline */}
        <p style={{color: "blue", padding: "25px", border: "2px solid red"}}>Esse elemento foi estilizado em forma Inline</p>
        {/* Css Inline dinamico */}
        <h2 style={n > 10 ? ({color: "blue"}) : ({color: "red"})}>Css Dinamico</h2>
        <h2 style={name === "Breno" ? ({color: "blue"}) : null}>Css Dinamico</h2>
        {/* Classe Dinamica */}
        <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinâmica</h2>
        {/* CSS Modules */}
        <Title />
        <h2 className='my_title'>Testando</h2>
      
      
      </div>
    </>
  )
}

export default App
