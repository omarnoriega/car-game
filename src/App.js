import React, { useState, useEffect } from 'react';
import './App.css';
import taxiImage from './assets/taxi.png';  // Asegúrate de poner la ruta correcta

const CarGame = () => {
  const [position, setPosition] = useState(0);  // Posición del carrito
  const [shakeThreshold, setShakeThreshold] = useState(15);  // Umbral para detectar la sacudida

  // Detiene el movimiento después de un tiempo
  useEffect(() => {
    const handleShake = (event) => {
      const acceleration = event.accelerationIncludingGravity;
      const totalAcceleration = Math.sqrt(
        acceleration.x * acceleration.x + 
        acceleration.y * acceleration.y + 
        acceleration.z * acceleration.z
      );

      if (totalAcceleration > shakeThreshold) {
        setPosition((prev) => prev + 20);  // Mueve el carrito al detectar sacudida
      }
    };

    // Agregar el evento de devicemotion cuando el componente se monte
    window.addEventListener('devicemotion', handleShake);

    // Eliminar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('devicemotion', handleShake);
    };
  }, [shakeThreshold]);

  const handleRestart = () => {
    setPosition(0);  // Restablecer la posición a 0
  };

  return (
    <div className="game-container">
      <p className="instructions">Toca la pantalla para mover el taxi.</p>
      <button onClick={handleRestart} className="restart-button">Restart</button>
      <div className="track">
      <img 
          src={taxiImage} 
          alt="Taxi clásico de NY" 
          className="car" 
          style={{ left: `${position}px` }} 
        />      
      </div>
      
    </div>
  );
};

export default CarGame;
