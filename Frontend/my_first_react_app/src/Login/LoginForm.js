import React, { useState } from 'react';
import axios from 'axios';
import { getData, postData, putData, deleteData } from './../Reqeusts.js'; // Importiere die Request-Funktionen
import './../CSS/authification/Login.css';

function LoginForm({ onLogin, onLogout }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [emptyFields, setEmptyFields] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [submitted, setSubmitted] = useState(false); // Zustand für die Anzeige der Erfolgsmeldung

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Überprüfen, ob beide Felder ausgefüllt sind
    if (!formData.username || !formData.password) {
      const missingFields = [];
      if (!formData.username) missingFields.push('Benutzername');
      if (!formData.password) missingFields.push('Passwort');
      setEmptyFields(missingFields);
      setError('Bitte füllen Sie alle erforderlichen Felder aus.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:8080/api/auth/signin', formData);
      console.log('Erfolgreich eingeloggt:', response.data);
      localStorage.setItem('accessToken', response.data.accessToken); // Token im Local Storage speichern
      onLogin(); // Aufruf der onLogin-Funktion
      setSuccessMessage('Erfolgreich eingeloggt.'); // Setze die Erfolgsmeldung
      setSubmitted(true); // Setze den Zustand für die Anzeige der Erfolgsmeldung
      // Leere die Formulardaten
      setFormData({ username: '', password: '' });
    } catch (error) {
      console.error('Fehler beim Einloggen:', error);
      setError('Fehler beim Einloggen. Bitte überprüfen Sie Ihre Daten.'); // Setze den Fehlerzustand
    }
  };

  return (
    <div className="m-2-login">
      <form onSubmit={handleSubmit} className='form-login'>
        {!submitted && (
          <>
            <div className='form-group-login'>
              <label>Benutzername</label>
              <input className={`form-control-edit`} type="text" name="username" value={formData.username} onChange={handleChange} placeholder='Benutzername' />
            </div>
            <div className='form-group-login'>
              <label>Passwort</label>
              <input className='form-control-login' type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Password' />
            </div>
            <button
              type="submit"
              disabled={!formData.username || !formData.password}
              className="log-button"
            >
              Einloggen
            </button>
            {error && <p className='error-message'>{error}</p>}
          </>
        )}
        {submitted && (
          <p className='success-message'>{successMessage}</p>
        )}
      </form>
    </div>
  );
}

export default LoginForm;
