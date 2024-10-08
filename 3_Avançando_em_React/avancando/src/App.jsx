import { Children, useState } from 'react'
import './App.css'
import City from './assets/City.jpg'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'


function App() {
  const [count, setCount] = useState(0)
  const name = 'Breno'
  const [userName] = useState('Maria')
  const cars = [
    {id: 1, brand: 'Ferrari', color: 'vermelho', newCar: true, km: 0},
    {id: 2, brand: 'Lamborghini', color: 'preto', newCar: true, km: 0},
    {id: 3, brand: 'VW', color: 'branco', newCar: false, km: 70.000}
  ]

  function showMessage() {
    console.log("Evento do componente pai!")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <>
      <div className='App'>
        <h1>Avançando em React</h1>
        {/*Imagem em public*/}
        <div>
          <img src="/img1.jpg" alt="Paisagem" />
        </div>
        <div>
          {/*Imagem em assets*/}
          <img src={City} alt="Cidade" />
        </div>
        <ManageData />
        <ListRender />
        <ConditionalRender />
        {/* props */}
        <ShowUserName name={userName}/>
        {/* destructuring */}
        <CarDetails brand='BW' km={100.000} color='Cinza' newCar={false}/>
        {/* Reaproveitando */}
        <CarDetails brand='Ford' km={94.000} color='azul' newCar={true}/>
        <CarDetails brand='Fiat' km={7.000} color='preto' newCar={false}/>
        {/* Loop em array de objetos */}
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} color={car.color} newCar={car.newCar} km={car.km} />
        ))}
        {/* Fragments */}
        <Fragment propFragment='Teste'/>
        {/* Children */}
        <Container myValue='Coding'>
          <p>E este é o conteúdo</p>
        </Container>
        <Container myValue='Coding2'>
          <h3>Testando o container</h3>
        </Container>
        {/* Executar Função com props */}
        <ExecuteFunction myFunction={showMessage}/>
        {/* State Lift */}
        <Message msg={message}/>
        <ChangeMessageState handleMessage={handleMessage}/>
      </div>
    </>
  )
}

export default App
