// Importamos las bibliotecas React y ReactDOM, así como el archivo CSS y otros componentes necesarios.
import React from 'react';
import ReactDOM from 'react-dom/client'; // *NOTA: Usar solo `react-dom`, no `react-dom/client`
import './index.css';
import Boton from "./Boton"; // Importamos el componente Boton desde su archivo correspondiente
import reportWebVitals from './reportWebVitals';

// Creamos un "root" utilizando el método createRoot de ReactDOM que renderizará nuestra aplicación en el elemento con el ID "root".
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizamos los elementos dentro del "root".
// Utilizamos <></> (Fragment) para agrupar varios componentes hijos sin necesidad de crear un elemento adicional en el DOM.
root.render(
  <>
    <Boton numero={1} /> {/* Renderizamos el componente Boton con la prop "numero" con valor 1 */}
    <Boton numero={2} /> {/* Renderizamos el componente Boton con la prop "numero" con valor 2 */}
    <Boton numero={3} /> {/* Renderizamos el componente Boton con la prop "numero" con valor 3 */}
  </>
);

// Si deseas medir el rendimiento de tu aplicación, puedes utilizar reportWebVitals y enviar los resultados a un punto de análisis o consola.
reportWebVitals();
