function calcular({ base, altura }, callback) {
	console.log("Entramos a la función de calcular área");
	setTimeout(() => {
		console.log(`La base es ${base} y altura es ${altura}`);
		callback(base, altura);
	}, 3000);
}

let props = {
	base: 20,
	altura: 10,
	largo: 15,
};

function area(base, altura) {
	let area = base * altura;
	console.log(`El área es: ${area}`);
}

calcular(props, area);
