let nombre = process.env.NOMBRE || "Sin nombre";
let web = process.env.WEB || "No tengo web";

console.log(nombre + web);
console.log("primer mensaje");
let i = 1;
setInterval(() => {
	console.log(i);
	i = i + 1;
	if (i === 5) i = 0;
}, 1000);

console.log("Segundo mensaje");
