// src/components/SignUp.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Cadastro() {
  const [formData, setFormData] = useState({ nome: '', email: '', senha: '', confirmarSenha: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.senha !== formData.confirmarSenha) {
      setError('As senhas não coincidem');
      return;
    }
    try {
      await axios.post('http://localhost:3000/register', {
        usuario: formData.nome,
        email: formData.email,
        senha: formData.senha,
      });
      navigate('/');
    } catch (err) {
      setError(err.response.data || 'Erro ao cadastrar');
    }
  };

  return (
    <div className="signup-container">
      <h2>Cadastrar-se no FIFA Campeonato</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Nome completo" onChange={handleChange} required />
        <input type="email" name="email" placeholder="E-mail" onChange={handleChange} required />
        <input type="password" name="senha" placeholder="Senha" onChange={handleChange} required />
        <input type="password" name="confirmarSenha" placeholder="Confirmar senha" onChange={handleChange} required />
        {error && <p className="error">{error}</p>}
        <button type="submit">Cadastrar</button>
      </form>
      <p>
        Já tem uma conta? <Link to="/">Faça login</Link>
      </p>
    </div>
  );
}

export default Cadastro;
