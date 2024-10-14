import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import taxiImage from './assets/taxi.png';  // Asegúrate de poner la ruta correcta
import './App.css';

const CarGame = () => {
  const [position, setPosition] = useState(0);  // Posición del carrito
  const [isMoving, setIsMoving] = useState(false);  // Estado del movimiento

  // Función que mueve el carrito
  const handleTap = () => {
    setIsMoving(true);
    setPosition((prev) => prev + 10);  // Aumenta la posición
  };

  // Detiene el movimiento después de un tiempo
  useEffect(() => {
    if (isMoving) {
      const timer = setTimeout(() => {
        setIsMoving(false);
      }, 500);  // Detiene el movimiento después de 500ms
      return () => clearTimeout(timer);
    }
  }, [isMoving]);

  const handleRestart = () => {
    setPosition(0);  // Restablecer la posición a 0
  };

  return (
    <div className="game-container" onClick={handleTap}>
      <div className="track">
      <img 
          src={taxiImage} 
          alt="Taxi clásico de NY" 
          className="car" 
          style={{ left: `${position}px` }} 
        />      
      </div>
      <button onClick={handleRestart} className="restart-button">
        Restart
      </button>
      <p>Toca la pantalla para mover el carrito.</p>
    </div>
  );
};

export default CarGame;
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
