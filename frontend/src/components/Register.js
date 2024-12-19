import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api-scarlet-ogd2.onrender.com/api/auth/register', {
        username,
        password,
        email
      });
      console.log('Usuario registrado:', response.data);
    } catch (error) {
      console.error('Error al registrar el usuario', error);
    }
  };

  return (
    <div className="register">
      <h2>Registrarse</h2>
      <form onSubmit={handleRegister}>
        <label>Usuario:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
