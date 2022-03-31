import React from 'react'


const Array = () => {

  const carros = ['Fusca', 'Gol', 'Celta', 'Corolla', 'Polo', ]
  const pessoas = ['Orion', 'Creitin', 'Jorgin', 'Klebin']

  return (

    <div>
      <h1>Array</h1>
      <h3>Carros</h3>
      {
        carros.map(item => (
          <p>{item}</p>
        ))
      }

      <h3>Pessoas</h3>
      {
        pessoas.map(people => (
          <li>{people}</li>
        ))
      }
    </div>

  )
}

export default Array