import React, { useState } from 'react'

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('https://carros-electricos.wiremockapi.cloud/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
    const data = await response.json()
    if (data.token) setToken(data.token)
    else alert('Credenciales incorrectas')
  }

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Iniciar sesión 🔐</h2>
        <input
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Entrar</button>
      </form>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    padding: '30px',
    borderRadius: '10px',
    backgroundColor: 'white',
    boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
    width: '300px'
  },
  title: {
    textAlign: 'center',
    marginBottom: '10px'
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  }
}

export default Login
