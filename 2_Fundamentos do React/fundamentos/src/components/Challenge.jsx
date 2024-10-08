const Challenge = () => {

    const a = 2
    const b = 4
    return(
        <div>
            <p>valor1: {a} valor2: {b}</p>   
            <button onClick={() => console.log(a + b)}>Clique aqui para somar!</button>         
        </div>
    )
    
}

export default Challenge;