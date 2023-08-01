# Explicaciones de la clase

1. Condicionales en línea:
En las líneas de código siguientes, se utilizan condicionales en línea para mostrar mensajes basados en las propiedades del componente `Card`.

```javascript
<p>{mundial ? "Gano un mundial 🥇" : "Sigue Participando👻"}</p>
<small>{late ? "Late ✅" : "Nola ❌"}</small>
```

En el primer caso, se evalúa la propiedad `mundial`. Si es `true`, se muestra el mensaje "Gano un mundial 🥇"; de lo contrario, se muestra "Sigue Participando👻". Esto se logra utilizando el operador ternario.

En el segundo caso, se evalúa la propiedad `late`. Si es `true`, se muestra el mensaje "Late ✅"; de lo contrario, se muestra "Nola ❌".

2. Estilos en línea:
En la línea de código siguiente, se aplican estilos en línea al elemento `small`.

```javascript
<small style={{backgroundColor: "blue"}}>{nacimiento}</small>
```

Aquí, se utiliza una doble llave `{{}}`. La primera llave indica que estamos escribiendo JavaScript dentro de JSX, y la segunda llave contiene el objeto de estilos. El objeto `style` contiene una propiedad `backgroundColor` con el valor "blue", lo que establece el fondo del elemento `small` en azul.

Es importante mencionar que esta forma de aplicar estilos en línea es específica de JSX y React. La propiedad `style` espera recibir un objeto JavaScript con nombres de propiedades en formato camelCase que representan los nombres de las propiedades CSS. Los valores de las propiedades deben ser cadenas de texto o números.



# Cards en REACT
La parte de React en el código que proporcionaste es la función de componente `Card`:

```jsx
function Card({ apellido, nacimiento, clubes, mundial, late }) {
  let nombre = "leonel";
  return (
    <>
      <h1>{nombre}</h1>
      <h2>{apellido}</h2>
      <small style={{ backgroundColor: "blue" }}>{nacimiento}</small>
      <p>{clubes}</p>
      <p>{mundial ? "Gano un mundial 🥇" : "Sigue Participando👻"}</p>
      <small>{late ? "Late ✅" : "Nola ❌"}</small>
    </>
  );
}

export default Card;
```

En esta función de componente, utilizas varios elementos de JSX (sintaxis similar a HTML) que son parte de React:

1. Los elementos como `<h1>`, `<h2>`, `<p>`, y `<small>` son elementos JSX que se renderizarán como elementos HTML en el navegador. Estos elementos forman la estructura del componente y su contenido.

2. Los componentes como `Card` pueden recibir propiedades (props) como argumentos de su función y utilizarlas dentro del JSX. En este caso, las propiedades recibidas son `apellido`, `nacimiento`, `clubes`, `mundial`, y `late`.

3. Los condicionales en línea, como `{mundial ? "Gano un mundial 🥇" : "Sigue Participando👻"}`, son parte de JavaScript y se utilizan dentro de JSX para mostrar contenido condicionalmente en función de las propiedades del componente. Estos condicionales en línea se representan utilizando el operador ternario.

4. Los estilos en línea, como `style={{ backgroundColor: "blue" }}`, también son parte de JSX y React. Se utilizan para aplicar estilos directamente a elementos JSX, proporcionando un objeto JavaScript con nombres de propiedades en formato camelCase que representan los estilos CSS.

En general, en esta función de componente `Card`, estás utilizando las características y sintaxis de React, como JSX, props, condicionales en línea y estilos en línea, para construir una parte de la interfaz de usuario de tu aplicación. Estas son características distintivas de React que facilitan la creación de componentes reutilizables y dinámicos para tus aplicaciones web.