import { useState } from 'react'
//Styles
import './App.css'
//components | 
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Eventos'
import Challenge from './components/Challenge'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Fundamentos React</h1>
        {/* Chamando o arquivo <FirstComponent/> */}
        <FirstComponent/>
        <TemplateExpressions/>
        <Events/>
        <Challenge />

      </div>
    </>
  )
}

export default App
