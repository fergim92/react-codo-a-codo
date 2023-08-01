# REACT BOOTSTRAP
https://react-bootstrap.netlify.app/

React Bootstrap es una biblioteca de componentes de interfaz de usuario que combina React (biblioteca de JavaScript) y Bootstrap (framework de diseño CSS). Proporciona una colección de componentes de React preestilizados basados en los estilos y el diseño proporcionados por Bootstrap.

Bootstrap es ampliamente conocido por su capacidad para crear interfaces de usuario receptivas, estilizadas y fáciles de usar. React Bootstrap toma las características de Bootstrap y las convierte en componentes de React reutilizables, lo que facilita la creación de interfaces de usuario bien diseñadas y adaptables utilizando React.

Al utilizar React Bootstrap, no es necesario escribir HTML y CSS directamente para cada componente de Bootstrap. En su lugar, puedes importar y utilizar los componentes de React Bootstrap dentro de tu aplicación React, lo que simplifica el proceso de desarrollo y mejora la consistencia de diseño en toda la aplicación.

Ejemplo de uso de React Bootstrap:

```jsx
import React from 'react';
import { Button, Navbar, Container, Row, Col } from 'react-bootstrap';

const MyComponent = () => {
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>React Bootstrap</Navbar.Brand>
      </Navbar>
      <Row>
        <Col>
          <Button variant="primary">Primary Button</Button>
        </Col>
        <Col>
          <Button variant="secondary">Secondary Button</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MyComponent;
```

En este ejemplo, hemos importado componentes como `Button`, `Navbar`, `Container`, `Row` y `Col` de React Bootstrap y los hemos utilizado para construir una interfaz de usuario básica. Los estilos y el diseño se aplican automáticamente a los componentes de acuerdo con las reglas de Bootstrap, lo que facilita la creación de una aplicación con una apariencia atractiva y coherente.

React Bootstrap es una excelente opción para aquellos desarrolladores que están familiarizados con Bootstrap y desean crear aplicaciones con React aprovechando las características y estilos del framework Bootstrap.


# Hooke
Un hook (hooke en español) en React es una función especial que permite a los componentes de función acceder a características y estados de React previamente disponibles solo en componentes de clase. Los hooks fueron introducidos en React a partir de la versión 16.8. Con los hooks, los componentes de función pueden tener estado interno y utilizar características avanzadas de React, como el ciclo de vida y el contexto.

Los hooks son funciones predefinidas que se importan desde el paquete `react` y se utilizan dentro del cuerpo de un componente de función. Cada hook tiene un propósito específico y brinda una funcionalidad adicional a los componentes de función.

Los hooks más comunes son:

1. `useState`: Permite agregar estado a componentes de función. Con `useState`, puedes definir variables de estado y sus respectivos setters.

```jsx
import React, { useState } from 'react';

const MiComponente = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};
```

2. `useEffect`: Permite realizar efectos secundarios, como suscribirse a eventos o realizar operaciones cuando el componente se monta o actualiza.

```jsx
import React, { useEffect, useState } from 'react';

const MiComponente = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    // Aquí puedes realizar operaciones después del renderizado inicial o cada vez que se actualice el componente.
    // Por ejemplo, llamar a una API, suscribirse a eventos, limpiar recursos, etc.
    // Este efecto se ejecutará después del primer render y también en cada actualización del componente.

    // Simulación de una llamada a una API
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setDatos(data));
  }, []);

  return (
    <div>
      {/* Mostrar los datos obtenidos de la API */}
      {datos.map((item, index) => (
        <p key={index}>{item.nombre}</p>
      ))}
    </div>
  );
};
```

3. `useContext`: Permite acceder a un contexto de React creado con `React.createContext`.

4. `useReducer`: Similar a `useState`, pero es útil cuando el estado es más complejo y necesita lógica personalizada para actualizarlo.

5. `useMemo`: Permite memorizar el resultado de una función, evitando cálculos innecesarios en cada renderizado.

6. `useCallback`: Similar a `useMemo`, pero para memorizar funciones.

Estos son solo algunos ejemplos de los hooks disponibles en React. Los hooks permiten escribir componentes de función más sencillos y expresivos, promoviendo la reutilización y facilitando el mantenimiento del código.