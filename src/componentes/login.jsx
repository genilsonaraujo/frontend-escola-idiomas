// src/componentes/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './login.css'; // Importe um arquivo CSS para estilização.

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null); // Limpa o erro anterior

    try {
      const response = await axios.post('https://api-django-4b2c63e2dc99.herokuapp.com/api/token/', {
        username,
        password,
      });

      // Armazena o token JWT no localStorage
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);

      // Exemplo de navegação após login bem-sucedido
      window.alert('Login bem-sucedido!');
      window.location.href ='/produtos';// Redireciona para a página de produtos

    } catch (err) {
      setError('Credenciais incorretas. Tente novamente.');
      console.error(err);
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  )
}

export default Login;


