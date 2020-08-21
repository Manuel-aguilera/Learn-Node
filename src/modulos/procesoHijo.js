const { exec, spawn } = require("child_process");

// Use exec
// exec("node src/modulos/consola.js", (err, stdout, sterr) => {
// 	if (err) {
// 		console.err(err.message);
// 		return false;
// 	}
// 	console.log(stdout);
// });

// exec("ps -f", (err, stdout, sterr) => {
// 	if (err) {
// 		console.err(err.message);
// 		return false;
// 	}
// 	console.log(stdout);
// });

// Use spawn
// let proceso = spawn("ls", ["-la"]); //("operación", [operacion1, operacion2])
// let proceso = spawn("ps", ["-f"]);
// console.log(process.pid);
// console.log(process.connected);

// proceso.stdout.on("data", (dato) => {
// 	estado();
// 	console.log(dato.toString());
// });

// proceso.on("exit", () => {
// 	estado();
// 	console.log(`Proceso muerto? ${proceso.killed}`);
// });

// estado = () => {
// 	console.log(`Proceso muerto? ${proceso.killed}`);
// };

// A very way to run ps ax | grep "MongoDB" readme.md
///grep es usado para buscar en archivos patrones de cadenas

const ps = spawn("ps", ["ax"]);
const grep = spawn("grep", ["node"]);

ps.stdout.on("data", (data) => {
	grep.stdin.write(data);
});

ps.stderr.on("data", (data) => {
	console.error(`ps.stderr: ${data}`);
});

ps.on("close", (code) => {
	if (code !== 0) {
		console.log(`ps process exited with code ${code}`);
	}
	grep.stdin.end();
});

grep.stdout.on("data", (data) => {
	console.log(data.toString());
});

grep.stderr.on("data", (data) => {
	console.log(`grep stderr: ${data}`);
});

grep.on("close", (code) => {
	if (code !== 0) {
		console.log(`grep process exited with code ${code}`);
	}
});
