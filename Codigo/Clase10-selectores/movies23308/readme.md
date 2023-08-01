https://www.themoviedb.org/documentation/api

https://developers.themoviedb.org/3/getting-started/introduction

https://www.themoviedb.org/settings/api

https://api.themoviedb.org/3/movie/popular?api_key=TUAPIKEY&language=es-MX&page=1

# Selectores

Ejemplos de cómo utilizar el método `querySelector` con diferentes tipos de selectores CSS:

1. Seleccionar un elemento por su etiqueta:
```html
<div id="miDiv">Este es un div.</div>

<script>
  const divElement = document.querySelector('div');
  console.log(divElement); // Imprimirá el div con el ID "miDiv"
</script>
```

2. Seleccionar un elemento por su clase:
```html
<p class="miParrafo">Este es un párrafo.</p>

<script>
  const pElement = document.querySelector('.miParrafo');
  console.log(pElement); // Imprimirá el párrafo con la clase "miParrafo"
</script>
```

3. Seleccionar un elemento por su ID:
```html
<button id="miBoton">Haz clic</button>

<script>
  const btnElement = document.querySelector('#miBoton');
  console.log(btnElement); // Imprimirá el botón con el ID "miBoton"
</script>
```

4. Seleccionar un elemento por un atributo específico:
```html
<input type="text" id="nombre" placeholder="Ingrese su nombre">

<script>
  const inputElement = document.querySelector('input[type="text"]');
  console.log(inputElement); // Imprimirá el input con el atributo type="text"
</script>
```

5. Combinar selectores:
```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
</ul>

<script>
  const liElement = document.querySelector('ul li');
  console.log(liElement); // Imprimirá el primer elemento <li> dentro del <ul>
</script>
```

Estos son solo ejemplos básicos, pero el método `querySelector` es muy flexible y se puede combinar con selectores CSS más complejos para seleccionar elementos específicos en el DOM según tus necesidades.