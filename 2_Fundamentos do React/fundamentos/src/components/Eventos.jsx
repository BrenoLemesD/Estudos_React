const Events = () => {

    const renderSomething = (x) => {

        if(x) {
            return <h1>Renderizando aqui</h1>
        } else {
            return <h1>Ou isso aqui</h1>
        }

    }

    //e => dados que o evento possui
    const handleMyEvent = (e) => {
        console.log(e)
    }
    return(

        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui!</button>
                <button onClick={() => console.log("Clicou!")}> Clique aqui e olhe o console</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>

    )

}

export default Events