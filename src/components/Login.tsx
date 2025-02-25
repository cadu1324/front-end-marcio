import React, { useState } from 'react';
import '../css/login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Senha:", password);
  };

  return (
    <div className="container"> 
      <div className="content"> 
        <h1 className="title">Conecte-se</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button >Entrar</button>
          <div className="create-login-container">
            <a href="/register">Criar login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;