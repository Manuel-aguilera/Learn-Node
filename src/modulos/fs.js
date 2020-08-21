const fs = require("fs").promises;
const { dirname } = require("path");

const leer = async (ruta) => {
	try {
		console.log("Inicia lectura");
		const data = await fs.readFile(ruta, { encoding: "utf-8" });
		console.log(data);
	} catch (error) {
		console.error(`No se pudo abrir el archivo: ${error}`);
	} finally {
		console.log("Finaliza leer");
	}
};

const escribir = async (ruta, contenido) => {
	try {
		console.log("Inicia lectura");
		await fs.writeFile(ruta, contenido);
	} catch (error) {
		console.error(`No se ha podido escribir en el archivo: ${error}`);
	} finally {
		console.log("Finaliza escribir");
	}
};

const borrar = async (ruta, cb) => {
	try {
		await fs.unlink(ruta, cb);
	} catch (error) {
		console.error(`No se puedo eliminar o encotrar el archivo: ${error}`);
	} finally {
		console.log("Terminamos borrar");
	}
};

// leer(__dirname + "/archivo.txt");
// escribir(__dirname + "/archivo1.txt", "Soy un archivo nuevo", console.log);
borrar(__dirname + "/archivo1.txt", console.log);
