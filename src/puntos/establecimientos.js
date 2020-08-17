const obtenerLocales = require("../api/index");

class Establecimientos {
	constructor() {
		this.data = [];
		this.obtenerData();
	}

	obtenerData = async (e) => {
		try {
			const locales = await obtenerLocales(16, 16);
			this.data = locales;
		} catch (excepcion) {
			console.log(excepcion.message);
		}
	};

	imprimirData = () => {
		console.log(this.data);
	};
}

const Locales = new Establecimientos();
setTimeout(() => {
	Locales.imprimirData();
}, 5000);
