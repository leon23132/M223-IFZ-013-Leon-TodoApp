import React from "react";
import TicTacToe from "../TicTacToe";
import "./../CSS/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="Boreded-Text">Willkommen zur Todo-Anwendung</h1>
      <p className="Boreded-Text">Beginnen Sie damit, Ihre Aufgaben zu verwalten und zu organisieren!</p>
      <div>
      <TicTacToe /> {/* Rendern der TicTacToe-Komponente hier */}
      </div>
      <div className="home-containerImage">

      </div>
    </div>
  );
};

export default Home;
