import React, { useState } from 'react';
import axios from 'axios';
import { getData, postData, putData, deleteData } from './../Reqeusts.js'; // Importiere die Request-Funktionen

function LoginForm({ onLogin, onLogout }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8080/api/auth/signin', formData);
        console.log('Erfolgreich eingeloggt:', response.data);
        localStorage.setItem('accessToken', response.data.accessToken); // Token im Local Storage speichern
        console.log(response.data.accessToken)
        onLogin(); // Aufruf der onLogin-Funktion
    } catch (error) {
        console.error('Fehler beim Einloggen:', error);
        // Hier kannst du eine Fehlermeldung anzeigen
    }
};


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={formData.username} onChange={handleChange} />
      <input type="password" name="password" value={formData.password} onChange={handleChange} />
      <button type="submit">Einloggen</button>
    </form>
  );
}

export default LoginForm;
