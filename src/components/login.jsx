// src/components/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', senha: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/login', formData);
      navigate('/home');
    } catch (err) {
      setError(err.response.data || 'Erro ao fazer login');
    }
  };

  return (
    <div className="login-container">
      <h2>Login no FIFA Campeonato</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="E-mail" onChange={handleChange} required />
        <input type="password" name="senha" placeholder="Senha" onChange={handleChange} required />
        {error && <p className="error">{error}</p>}
        <button type="submit">Acessar</button>
      </form>
      <p>
        Não possui cadastro? <Link to="/signup">Cadastre-se</Link>
      </p>
    </div>
  );
}

export default Login;
