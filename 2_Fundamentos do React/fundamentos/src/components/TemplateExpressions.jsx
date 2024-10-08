const TemplateExpressions = () => {

    const data = {
        name: 'Breno',
        age: 18,
        job: 'Programador',
    }

    return(
        <div>
            <p>Seu nome é {data.name}, você tem {data.age} e é um {data.job} </p>
        </div>
    )
}

export default TemplateExpressions