## El Virtual DOM (DOM Virtual o DOM Virtualizado) 
Es un concepto clave en React, una popular biblioteca de JavaScript para construir interfaces de usuario interactivas y reactivas. El DOM (Document Object Model) es una representación de la estructura del documento HTML que se crea cuando se carga una página web en el navegador.

El Virtual DOM de React es una abstracción liviana del DOM real. Cuando se trabaja con React, en lugar de actualizar directamente el DOM del navegador cada vez que hay un cambio en los datos o el estado de la aplicación, React realiza las actualizaciones primero en su propio Virtual DOM.

El proceso de actualización del Virtual DOM es mucho más rápido que la manipulación directa del DOM del navegador. Una vez que React ha realizado todas las actualizaciones necesarias en el Virtual DOM, compara la versión actualizada del Virtual DOM con la versión anterior (snapshot anterior) para detectar los cambios que realmente ocurrieron. Esto se conoce como reconciliación.

Después de la reconciliación, React identifica y aplica solo los cambios necesarios al DOM real del navegador, minimizando las manipulaciones y actualizaciones en el DOM, lo que reduce significativamente el costo computacional y mejora el rendimiento de la aplicación.

El Virtual DOM de React permite una programación más sencilla y eficiente, ya que los desarrolladores pueden trabajar con una abstracción del DOM sin preocuparse por las actualizaciones manuales y directas. Esta técnica es una de las razones principales por las que React se considera una biblioteca eficiente y rápida para crear interfaces de usuario dinámicas y reactivas.

# Comandos

### `npx create-react-app miPrimerApp`
// Me da una aplicacioncita basica de react.
// Esto  va a crear la carpeta con los node_modules !Este no se tiene que subir 
// a git,muy pesado agregarlo a gitignore!

// Si descargo un proyeto node, tengo que entrar en la carpeta de la app y desde la terminal escribir `npm install`
// para que se instalen estos modulos pesados,en pachage.json esta la informacion de nestro proyecto

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

// Este comando inicia la aplicación en modo de desarrollo.
// Abre [http://localhost:3000](http://localhost:3000) en el navegador para verla en funcionamiento.
// La página se recargará automáticamente cuando realices cambios.
// También mostrará errores de linting (si los hay) en la consola.

### `npm test`

// Este comando inicia el runner de pruebas en el modo interactivo de observación.
// Consulta la sección sobre [running tests](https://facebook.github.io/create-react-app/docs/running-tests) para obtener más información sobre las pruebas.

### `npm run build`

// Este comando genera la versión optimizada de producción de la aplicación en la carpeta `build`.
// React se empaqueta y optimiza para obtener el mejor rendimiento.
// La compilación está minificada y los nombres de archivo incluyen hashes para evitar el almacenamiento en caché.
// ¡La aplicación está lista para ser desplegada!

// Consulta la sección sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para obtener más información sobre cómo desplegar la aplicación.

### `npm run eject`

// Nota: ¡esta es una operación irreversible! Una vez que uses `eject`, ¡no puedes volver atrás!
// Si no estás satisfecho con la herramienta de construcción y las opciones de configuración, puedes "eject" en cualquier momento.
// Este comando eliminará la única dependencia de construcción de tu proyecto.
// En su lugar, copiará todos los archivos de configuración y las dependencias transitivas (Webpack, Babel, ESLint, etc.) directamente en tu proyecto para que tengas control total sobre ellos.
// Todos los comandos excepto `eject` seguirán funcionando, pero apuntarán a los scripts copiados para que puedas modificarlos.
// A partir de este punto, estás por tu cuenta.
// No es necesario usar `eject`. El conjunto de características seleccionadas es adecuado para implementaciones pequeñas y medianas, y no es obligatorio usar esta característica.
// Sin embargo, entendemos que esta herramienta no sería útil si no pudieras personalizarla cuando estés listo para hacerlo.
Recuerda que estos comentarios son solo una breve explicación de cada comando. Para obtener información más detallada y actualizada, siempre es recomendable consultar la documentación oficial de Create React App y las herramientas relacionadas.






## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
