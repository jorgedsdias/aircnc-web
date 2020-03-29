import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

export default function Login() {
    const [email, setEmail] = useState('');
    const history = useHistory();

    async function handleSubmit(e) {
      e.preventDefault();
  
      const response = await api.post('/sessions', { email });
  
      const { _id } = response.data;
  
      localStorage.setItem('user', _id);

      history.push('/dashboard');
    }

    return (
        <>
            <p>
                Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
            </p>

            <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail *</label>
            <input 
                type="email" 
                id="email" 
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />

            <button type="submit" className="btn">Entrar</button>
            </form>
        </>
    );
}