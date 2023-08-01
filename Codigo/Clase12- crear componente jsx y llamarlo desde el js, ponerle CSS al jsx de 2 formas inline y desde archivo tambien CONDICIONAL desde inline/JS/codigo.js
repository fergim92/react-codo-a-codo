//El código que proporcionas utiliza el concepto de "Destructuring" y el "Spread Operator" en JavaScript. Ambos mecanismos son útiles para trabajar con arrays y objetos de manera más concisa y elegante. A continuación, explicaré lo que hace cada parte del código:

//Array
let seleccion = ["Messi", "De Paul", "Martinez"]

// copio los datos SIN DESTRUCTURING
let dibu2 = seleccion[2] 
console.log(dibu2); // Imprime "Martinez"

seleccion.pop();
console.log(dibu2); // Imprime "Martinez" (el valor de dibu2 no cambia aunque se haya modificado el array "seleccion")
console.log(seleccion); // Imprime ["Messi", "De Paul"]

// copio los datos CON DESTRUCTURING
let [leo, rodrigo, dibu] = seleccion
console.log(seleccion); // Imprime ["Messi", "De Paul"] (destructuring no afecta al array original)
console.log(leo); // Imprime "Messi"

// copio los datos SIN DESTRUCTURING
let auto = {
  marca: "Citroen",
  modelo: "C3",
  anio: 2003
}

/* let miModelo = auto.modelo
console.log(auto); */

// extraer los datos CON DESTRUCTURING
let { marca: marcaok, anio } = auto
console.log(marcaok); // Imprime "Citroen"

// spread operator (operador de propagación)
// array
let rapido = ["rapido y furioso", "rapido y furioso2", "rapido y furioso3"]
let furioso = ["rapido y furioso 4", "rapido y furioso 5"]

let todas = [...rapido, ...furioso, "La 6"]
console.log(todas); // Imprime ["rapido y furioso", "rapido y furioso2", "rapido y furioso3", "rapido y furioso 4", "rapido y furioso 5", "La 6"]

rapido.pop()
console.log(rapido) // Imprime ["rapido y furioso", "rapido y furioso2"]

// objeto
let generoAccion = {
  nombreGenero: "Accion",
  popularidad: 10
}

let rambo = {
  titulo: "rambo",
  ranking: 1,
  ...generoAccion
}

console.log(rambo.popularidad); // Imprime 10 (el valor se obtiene del objeto "generoAccion")
  
/*
En resumen, el "Destructuring" permite extraer elementos de arrays u objetos y asignarlos a variables separadas, 
mientras que el "Spread Operator" permite combinar arrays u objetos en uno solo, manteniendo sus elementos originales.
*/