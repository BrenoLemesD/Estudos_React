import { useState } from 'react'
import './App.css'
import car from "./components/car"



function App() {
  const [count, setCount] = useState(0)
  const myCars = [
    {name: "Fusca", km: "10000", color: "Branco"},
    {name: "Polo", km: "32000", color: "Cinza"},
    {name: "Onix", km: "0", color: "Preto"},
  ]

  return (
    <>
      <div>
        <h1>Showroom de carros</h1>
        <div className='car-container'>
          {myCars.map((car) => (
            <car car={car}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
