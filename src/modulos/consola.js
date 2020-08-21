// var tabla = [
// 	{
// 		a: 1,
// 		b: "Z",
// 	},
// 	{
// 		a: 2,
// 		b: "H",
// 		c: "hola",
// 	},
// ];

// console.table(tabla);

// console.group("Conversacion");
// console.log("Hola");
// console.log("Manuel");
// console.log("Aguilera");
// console.groupEnd("Conversacion");

// console.log("Otra función");

function name() {
	console.group("funcion 1");
	console.log("Esto es de la funcion 1");
	console.log("Esto tambien");
	name2();
	console.log("Volfimos a la función 1");
	console.groupEnd("función 1");
}

function name2() {
	console.group("funcion 2");
	console.log("Ahora es la funcion 2");
	console.groupEnd("función 2");
}

console.log("Empezamos");
name();

setTimeout(() => {
	console.clear();
}, 1000);

console.time("tiempo");

console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");

console.timeEnd("tiempo");

// Some code
let obj = {
	value1: 4,
	value2: 5,
	value3: 7,
};

console.debug(obj); ///is the same that console.log
