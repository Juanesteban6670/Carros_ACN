import React, { useEffect, useState } from 'react'

const CarList = ({ token }) => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    fetch('https://carros-electricos.wiremockapi.cloud/carros', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setCars(data))
  }, [token])

  return (
    <div>
      <h2>Mis carros</h2>
      <ul>
        {cars.map((carro, i) => (
          <li key={i}>{carro.nombre}</li>
        ))}
      </ul>
    </div>
  )
}

export default CarList
