const fs = require("fs");
const stream = require("stream");
const util = require("util");

let data = "";

let readableStream = fs.createReadStream(__dirname + "/input.txt");

readableStream.setEncoding("utf-8");

// readableStream.on("data", (chunk) => {
// 	data += chunk;
// });

// readableStream.on("end", () => {
// 	console.log(data);
// });

// process.stdout.write("hola");
// process.stdout.write("que");
// process.stdout.write("tal");

const transform = stream.Transform;

function Mayus() {
	transform.call(this);
}

util.inherits(Mayus, transform); //Mayus hereda a transform

Mayus.prototype._transform = function (chunck, codif, cb) {
	chunckMayus = chunck.toString().toUpperCase();
	this.push(chunckMayus);
	cb();
};

let mayus = new Mayus();
//ReadableStream anbre el archivo y pasa el flujo de datos a mayus,
//mayus está adaptado para transform.
//Una vez pasado por mayus ya se ha convertido el texto a mayusculas.
//Ahora se pasa el flujo de datos a process.stdout para que salga en
//pantalla el resultado del flujo.
//process.stdout es un readableStream de lectura
readableStream.pipe(mayus).pipe(process.stdout);
