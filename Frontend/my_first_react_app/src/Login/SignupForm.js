import React, { useState } from 'react';
import axios from 'axios';
import './../CSS/authification/Signup.css';

function SignupForm({ onSignup }) {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [submitted, setSubmitted] = useState(false); // Zustand für die Anzeige der Erfolgsmeldung

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.email || !formData.password) {
            setError('Bitte füllen Sie alle Felder aus.');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/api/auth/signup', formData);
            console.log('Erfolgreich registriert:', response.data);
            setSuccessMessage(response.data.message);
            setSubmitted(true); // Setze den Zustand auf "true", um die Eingabefelder auszublenden
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
                <p>Erfolgreich registriert: {successMessage}</p>
            )}
        </div>
    );
}

export default SignupForm;
