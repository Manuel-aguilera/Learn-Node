// let i = 0;
// let intervalo = setInterval(() => {
// 	console.log("hola");
// 	if (i === 3) {
// 		clearInterval(intervalo);
// 	}
// 	i++;
// }, 1000);

setImmediate(function () {
	// console.log(`Directorio actual: ${__dirname}`);
	// console.log(`Folder actual: ${__filename}`);

	// console.log(require.main);
	console.log(URL);
});

console.log(this === global);
console.log(require.main === module);
console.log(exports);
