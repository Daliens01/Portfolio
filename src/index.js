import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa desde 'react-dom/client'
import App from './App'; // Importa tu componente principal

// Selecciona el elemento HTML donde quieres montar tu aplicación React
const rootElement = document.getElementById('root');

// Crea un 'root' de React. Esto es parte de la nueva API de React 18+
const root = ReactDOM.createRoot(rootElement);

// Renderiza tu componente principal dentro del 'root'
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);