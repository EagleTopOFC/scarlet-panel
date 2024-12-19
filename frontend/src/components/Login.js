import React, { useState } from 'react';
import axios from 'axios';

function Login({ setApiKey }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api-scarlet-ogd2.onrender.com/api/auth/login', {
        username,
        password
      });
      setApiKey(response.data.apiKey);
    } catch (error) {
      console.error('Error al iniciar sesión', error);
    }
  };

  return (
    <div className="login">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <label>Usuario:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;
