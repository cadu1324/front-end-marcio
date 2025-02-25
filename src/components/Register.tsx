import React, { useState } from 'react';
import '../css/register.css'; // Estilos específicos do formulário

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica de cadastro (implemente aqui)
  };

  return (
    <div className="container"> 
      <div className="content"> 
        <h1 className="title">Cadastro</h1> 
        <form onSubmit={handleSubmit} className="form"> 
          <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;