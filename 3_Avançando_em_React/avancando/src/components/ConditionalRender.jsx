import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(true)

    const [name, setName] = useState('jao')
  
    return (
    <div>
        <h1>Isso será escrito?</h1>
        {x && <p>Se x for true, Sim!</p>}
        {!x && <p>Agora é falso!</p>}
        <h1>IF TERNÁRIO</h1>
    {name === "Breno" ? (
        <div>
            <p>Nome é Breno</p>
        </div>
    ) : (
        <div>
            <p>Nome não é Breno</p>
        </div>
    )}
    <button onClick={() => setName('Breno')}>Clica aqui</button>
    </div>
  )
}

export default ConditionalRender