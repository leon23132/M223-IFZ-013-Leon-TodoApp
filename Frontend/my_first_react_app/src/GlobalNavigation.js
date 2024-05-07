import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from "react-router-dom";
import Home from "./PublicPages/Home";
import { TaskDisplay } from "./TaskDisplay";
import './CSS/GlobalNavigationSt.css';
import LoginForm from "./Login/LoginForm";

export function GlobalNavigation() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Zustand für den Anmeldestatus

    const handleLogin = () => {
        setIsLoggedIn(true); // Setze den Anmeldestatus auf true
    };

    const handleLogout = () => {
        setIsLoggedIn(false); // Setze den Anmeldestatus auf false
    };

    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <NavLink className="m-2 btn btn-block btn-primary-bar" activeClassName="active" id="Navigation"
                            to="/home">Home</NavLink>
                        <NavLink className="m-2 btn btn-block btn-primary-bar" activeClassName="active" id="Navigation"
                            to="/task">Task</NavLink>
                        {/* Wenn der Benutzer nicht angemeldet ist, zeige den Link zum LoginForm */}
                        {!isLoggedIn && (
                            <NavLink className="m-2 btn btn-block btn-primary-bar" activeClassName="active" id="Navigation"
                                to="/LoginForm">Login</NavLink>
                        )}
                        {/* Wenn der Benutzer angemeldet ist, zeige den Logout-Button im Navigationsmenü */}
                        {isLoggedIn && (
                            <button className="m-2 btn btn-block btn-primary-bar" onClick={handleLogout}>Logout</button>
                        )}
                    </div>
                    <div className="col">
                        <Routes>
                            <Route path="/LoginForm" element={<LoginForm onLogin={handleLogin} />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/task" element={<TaskDisplay />} />
                            <Route path="/" element={<Navigate to="/home" />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}
