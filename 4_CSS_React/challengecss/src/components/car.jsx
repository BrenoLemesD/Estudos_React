import styles from './car.module.css'

import React from 'react'

const car = ({car}) => {
  return (
    <div>
        <h1>{car.name}</h1>
        <p>KM: {car.km}</p>
        <p>Cor: {car.color}</p>

    </div>
  )
}

export default car