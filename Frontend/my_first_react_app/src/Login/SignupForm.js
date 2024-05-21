import React, { useState } from 'react';
import axios from 'axios';
import './../CSS/authification/Signup.css';

function SignupForm({ onSignup }) {
  // State variables for form data, error handling, success message, and submission status
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (!formData.username || !formData.email || !formData.password) {
      setError('Bitte füllen Sie alle Felder aus.');
      return;
    }
    try {
      // Send signup request to the server
      const response = await axios.post('http://localhost:8080/api/auth/signup', formData);
      console.log('Erfolgreich registriert:', response.data);
      setSuccessMessage(response.data.message);
      setSubmitted(true); // Set submission status to true to hide the input fields
      if (onSignup) {
        onSignup();
      }
    } catch (error) {
      console.error('Fehler beim Registrieren:', error);
      setError('Fehler beim Registrieren. Bitte überprüfen Sie Ihre Daten.');
    }
  };

  return (
    <div className='m-2-signup'>
      {!submitted ? (
        <form className='form-login' onSubmit={handleSubmit}>
          <div className='form-group-signup'>
            <label>Benutzername</label>
            <input className={`form-control-edit`} type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Benutzername" />
          </div>
          <div className='form-group-signup'>
            <label>E-Mail</label>
            <input className={`form-control-edit`} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-Mail-Adresse" />
          </div>
          <div className='form-group-signup'>
            <label>Passwort</label>
            <input className={`form-control-edit`} type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Passwort" />
          </div>
          <div className='text-center'>
            <button type="submit" className="log-button">Signup</button>
            {error && <p className="error-message">{error}</p>}
          </div>
        </form>
      ) : (
        <p className='success-message'>Erfolgreich registriert: {successMessage}</p>
      )}
    </div>
  );
}

export default SignupForm;
