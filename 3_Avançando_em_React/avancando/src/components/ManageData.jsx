import { useState } from "react"

const ManageData = () => {
    let someData = 10

    const [number, setNumber] = useState(10)

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 15)}>Mudar valor</button>
        </div>
        <div>
            <p>Novo Valor: {number}</p>
            <button onClick={() => setNumber(25)}>Muda o State</button>
        </div>
    </div>
  )
}

export default ManageData