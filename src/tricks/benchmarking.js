const { response } = require("express");

console.time("Todo");

let suma = 0;
console.time("bucle");
for (let i = 0; i < 100000000; i++) {
	suma += i;
}
console.timeEnd("bucle");

let suma2 = 0;
console.time("bucl2");
for (let i = 0; i < 1000000000; i++) {
	suma2 += i;
}

//async
console.time("Asicrono");
console.log("Empieza el proceso asincrono");
asincrona().then(() => {
	console.timeEnd("Asicrono");
});

function asincrona() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("Termina mi proceso asíncrono");
			resolve();
		});
	});
}
//async end

console.timeEnd("bucl2");

console.timeEnd("Todo");
