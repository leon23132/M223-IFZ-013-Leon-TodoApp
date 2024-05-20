import React, { useState } from 'react';
import axios from 'axios';
import './../CSS/authification/Login.css';

function LoginForm({ onLogin, onLogout }) {
  // State variables for form data, error handling, empty fields, success message, and submission status
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [emptyFields, setEmptyFields] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if both fields are filled
    if (!formData.username || !formData.password) {
      const missingFields = [];
      if (!formData.username) missingFields.push('Benutzername');
      if (!formData.password) missingFields.push('Passwort');
      setEmptyFields(missingFields);
      setError('Bitte füllen Sie alle erforderlichen Felder aus.');
      return;
    }
    try {
      // Send login request to the server
      const response = await axios.post('http://localhost:8080/api/auth/signin', formData);
      console.log('Erfolgreich eingeloggt:', response.data);
      localStorage.setItem('accessToken', response.data.accessToken); // Store token in local storage
      onLogin(); // Call the onLogin function passed as prop
      setSuccessMessage('Erfolgreich eingeloggt.'); // Set success message
      setSubmitted(true); // Set submission status to true
      // Clear form data
      setFormData({ username: '', password: '' });
    } catch (error) {
      console.error('Fehler beim Einloggen:', error);
      setError('Fehler beim Einloggen. Bitte überprüfen Sie Ihre Daten.'); // Set error message
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
              <input className='form-control-login' type="password" name="password" value={formData.password} onChange={handleChange} placeholder='Passwort' />
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
