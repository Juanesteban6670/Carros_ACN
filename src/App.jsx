import React, { useState } from 'react'
import Login from './components/Login'
import CarList from './components/CarList'

const App = () => {
  const [token, setToken] = useState(null)

  return (
    <div>
      <h1>🚗 Carros Eléctricos ACN</h1>
      {!token ? <Login setToken={setToken} /> : <CarList token={token} />}
    </div>
  )
}

export default App
