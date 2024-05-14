import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from "react-router-dom";
import Home from "./PublicPages/Home";
import { TaskDisplay } from "./TaskDisplay";
import './CSS/GlobalNavigationSt.css';
import LoginForm from "./Login/LoginForm";
import SignupForm from "./Login/SignupForm";

export function GlobalNavigation() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Zustand für den Anmeldestatus

    const handleLogin = () => {
        setIsLoggedIn(true); // Setze den Anmeldestatus auf true
    };

    const handleLogout = () => {
        setIsLoggedIn(false); // Setze den Anmeldestatus auf false
        localStorage.setItem('accessToken', null);
    };

    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <NavLink className="m-2 btn btn-block btn-primary-bar" activeClassName="active" id="Navigation"
                            to="/home">Home</NavLink>
                        {isLoggedIn && (
                            <NavLink className="m-2 btn btn-block btn-primary-bar" activeClassName="active" id="Navigation"
                                to="/task">Task</NavLink>
                        )}

                        {/* Wenn der Benutzer nicht angemeldet ist, zeige den Link zum LoginForm */}
                        {!isLoggedIn && (
                            <NavLink className="m-2 btn btn-block btn-primary-bar" activeClassName="active" id="Navigation"
                                to="/LoginForm">Login</NavLink>
                        )}
                        {/* Wenn der Benutzer angemeldet ist, zeige den Logout-Button im Navigationsmenü */}
                        {isLoggedIn && (
                            <NavLink className="m-2 btn btn-block btn-primary-bar" onClick={handleLogout} activeClassName="active" id="Navigation">Logout</NavLink>

                        )}

                        <NavLink className="m-2 btn btn-block btn-primary-bar" activeClassName="active" id="Navigation"
                            to="/Signup">Signup</NavLink>

                        {isLoggedIn && (
                            <button className="login-view" disabled>Logged in</button>
                        )}


                    </div>
                    <div className="col">
                        <Routes>
                            <Route path="/LoginForm" element={<LoginForm onLogin={handleLogin} />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/task" element={isLoggedIn ? <TaskDisplay /> : <Navigate to={"/LoginForm"} />} />
                            <Route path="/" element={<Navigate to="/home" />} />
                            <Route path="/Signup" element={<SignupForm />} />
                            <Route path="/*" element={<Navigate to="/home" />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}
