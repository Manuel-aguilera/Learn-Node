//Perímetros, áreas superciales y cúbicas de figuras
class Figura {
	constructor(nombre, l1, l2) {
		this.nombre = nombre;
		this.l1 = l1;
		this.l2 = l2;
	}

	obtenerNombre = () => {
		// setInterval(() => {
		console.log(this.nombre);
		// }, 5000);
	};
}

class Cuadrilatero extends Figura {
	constructor(nombre, l1, l2) {
		super(nombre, l1, l2);
		this.perimetro = 0;
		this.area = 0;
		this.establecerValores();
	}

	establecerValores = () => {
		this.perimetro = this.l1 * 2 + this.l2 * 2;
		this.area = this.l1 * this.l2;
	};

	obtenerPerimetro = () => {
		const p = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve("Terminamos el tiempo de espera de Perimetro");
				reject("Algo salió mal");
			}, 2000);
		});

		p.then((result) => {
			console.log(result);
			console.log(`El perimetro es ${this.perimetro}`);
		}).catch((exception) => {
			console.log(`Hubo un error y es:  ${exception}`);
		});
	};

	obtenerArea = () => {
		const p = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve("Terminamos el tiempo de espera de Area");
				reject("Algo salió mal");
			}, 2000);
		});

		p.then((result) => {
			console.log(result);
			console.log(`El area es ${this.area}`);
		}).catch((exception) => {
			console.log(`Hubo un error y es:  ${exception}`);
		});
	};
}

class Cubico extends Cuadrilatero {
	constructor(nombre, l1, l2, l3) {
		super(nombre, l1, l2);
		this.l3 = l3;
		this.volumen = 0;
		this.establecerValores();
	}

	establecerValores = () => {
		this.perimetro = this.perimetro * 2 + this.l3 * 4;
		this.volumen = this.area * this.l3;
	};

	obtenerPerimetro = () => {
		const p = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve("Terminamos el tiempo de espera de Perimetro");
				reject("Algo salió mal");
			}, 4000);
		});

		p.then((result) => {
			console.log(result);
			console.log(`El perimetro es ${this.perimetro}`);
		}).catch((exception) => {
			console.log(`Hubo un error y es:  ${exception}`);
		});
	};

	obtenerArea = () => {
		const p = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve("Terminamos el tiempo de espera del volumen");
				reject("Algo salió mal");
			}, 4000);
		});

		p.then((result) => {
			console.log(result);
			console.log(`El volumen es ${this.volumen}`);
		}).catch((exception) => {
			console.log(`Hubo un error y es:  ${exception}`);
		});
	};
}

const figuras = [
	new Cuadrilatero("Cuadrado", 10, 5),
	new Cubico("Cubo", 5, 5, 5),
];
figuras.forEach((fig) => {
	fig.obtenerNombre();
	fig.obtenerPerimetro();
	fig.obtenerArea();
});
