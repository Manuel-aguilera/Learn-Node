//process viene en los modulos globales

process.on("beforeExit", () => {
	console.log("El proceso va a terminar");
});

process.on("exit", () => {
	console.log("El proceso acabó");
	//jamás se ejecutarán subprocesos porque se ya se desconectó el EventLoop
	setTimeout(() => {
		console.log("Ejecutamos esta línea");
	}, 0);
});

process.on("uncaughtException", (err, origen) => {
	console.error("Se nos ha olvidado capturar un error");
	console.error(err);
	setTimeout(() => {
		console.log("Ejecutamos esta línea dentro de exception");
	}, 0);
});

// functionNoExiste();

console.log("Si el error no se recoje esto no se muestra");
