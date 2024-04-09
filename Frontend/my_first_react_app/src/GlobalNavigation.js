import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate } from "react-router-dom";
import Home from "./Home";
import { TaskDisplay } from "./TaskDisplay";
import './CSS/GlobalNavigationSt.css';


export function GlobalNavigation() {

    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <NavLink className="m-2 btn btn-block btn-primary-bar" activeclassname="active" id="Navigation"
                            to="/home">Home</NavLink>
                        <NavLink className="m-2 btn btn-block btn-primary-bar" activeclassname="active" id="Navigation"
                            to="/task">Task</NavLink>

                    </div>
                    <div className="col">
                        <Routes>
                            <Route path="/home" element={<Home />} />
                            <Route path="/task" element={<TaskDisplay />} />
                            <Route path="/" element={() => <Navigate to="/home" />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}
