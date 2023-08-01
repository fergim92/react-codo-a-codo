# `async/await` y `axios` 
Axios nos permite hacer en una sola linea lo que con async estamos haciendo en 10

1. # `async/await`:
`async/await` es una característica de JavaScript que permite trabajar con funciones asíncronas de manera más sencilla y legible. Con `async/await`, puedes escribir código asincrónico que parece síncrono, lo que facilita su comprensión. Se basa en las promesas y proporciona una forma más declarativa de trabajar con ellas.

- ¿Cuándo usar `async/await`?
  - Debes usar `async/await` cuando estés trabajando con funciones asíncronas, como llamadas a la API, operaciones de lectura/escritura de archivos, etc. Esto te permite evitar el "callback hell" y simplificar la lógica del código asíncrono.
  - Es útil cuando necesitas esperar a que se resuelvan varias promesas antes de continuar con la ejecución del código.

Ejemplo de uso de `async/await`:

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log('Error fetching data:', error);
  }
}
```

2. # `axios`:
`axios` es una biblioteca de JavaScript que facilita las solicitudes HTTP desde el cliente (navegador) o servidor (Node.js). Proporciona una interfaz simple y amigable para hacer solicitudes a API y trabajar con respuestas HTTP. (ALGO ASI COMO BOOSTRAP OSEA PODEMOS LINKEARLO O PODEMOS INSTALARLO)

- ¿Cuándo usar `axios`?
  - Debes usar `axios` cuando necesitas hacer solicitudes HTTP a una API o servidor desde el lado del cliente (navegador) o el servidor (Node.js).
  - Es útil cuando deseas realizar tareas específicas relacionadas con solicitudes HTTP, como establecer encabezados personalizados, manejar errores o transformar la respuesta.

Ejemplo de uso de `axios`:

```javascript
import axios from 'axios';

async function fetchData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    console.log(response.data);
  } catch (error) {
    console.log('Error fetching data:', error);
  }
}
```

En resumen, `async/await` se usa para trabajar con funciones asíncronas y simplificar el código asincrónico, mientras que `axios` se usa para hacer solicitudes HTTP a APIs o servidores. Puedes usar `async/await` en combinación con `axios` (u otras bibliotecas de solicitud HTTP) para hacer código asíncrono más legible y fácil de manejar.