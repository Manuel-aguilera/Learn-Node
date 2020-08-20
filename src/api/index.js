const fetch = require("node-fetch");

const valores = {
	numInicio: 1,
	numFin: 1,
	// token: "5590467b-8836-4649-a619-9a6f01f1a0c5",
	token: "a48c00bf-3ff5-4d18-ba25-7e7728e65664",
	proxy: "https://cors-anywhere.herokuapp.com/",
	urlApi:
		"https://www.inegi.org.mx/app/api/denue/v1/consulta/BuscarEntidad/municipios/#entidad/#numInicio/#numFin/#token",
};

const Data = [];

//Arregllamos la url con limite inicial y final y ponemos el token
const getUrl = () => {
	let url = valores.urlApi.replace("#numInicio", valores.numInicio);
	url = url.replace("#numFin", valores.numFin);
	url = url.replace("#token", valores.token);
	return url;
};

//Obtenemos Los datos de establecimientos de michoacán
const obtenerData = async (inicio = 16, fin = 16) => {
	const data = [];
	//Son 32 estados
	for (inicio; inicio <= fin; inicio++) {
		let url = getUrl();
		let myUrl = url.replace("#entidad", inicio);
		try {
			data.push(await (await fetch(myUrl)).json());
			console.log(myUrl);
			console.log("Finalizado fetch...");
		} catch (error) {
			console.log("Catch");
			console.log(error);
		}
	}
	// console.log(data);
	return data;
};

const pruebaData = async () => {
	console.log("Empezamos el programa");
	await obtenerData();
	console.log("Terminamos el programa");
};

console.log("Llamamos a pruebaData()");
pruebaData();
console.log("Termina pruebaData()");

const clean = (cadena) => {
	const regex = /\//gi;
	return cadena.replace(regex, "");
};

module.exports = async (numInicio, numFin) => {
	const locales = await obtenerData(numInicio, numFin);
	locales.forEach((estado) => {
		estado.forEach((local) => {
			const val = local.Ubicacion.split(",");
			const ubic = val.map((v) => v.trim()); //ubic[localidad, municipio, estado]

			Data.push([
				clean(local.Tipo_vialidad),
				clean(local.Calle.trim()),
				clean(local.Colonia.trim()),
				clean(ubic[0]),
				clean(ubic[1]),
				clean(ubic[2]),
				clean(local.Num_Exterior),
				clean(local.Nombre),
				clean(local.Clase_actividad),
				clean(local.Correo_e),
				clean(local.Sitio_internet),
				clean(local.Telefono),
				{ localizacion: [clean(local.Latitud), clean(local.Longitud)] },
			]);
		});
	});
	return Data;
};

// CP: "20199";
// Calle: "PANAL";
// Clase_actividad: "Comercio al por menor en tiendas de abarrotes, ultramarinos y misceláneas";
// Colonia: "MUNICIPIO LIBRE";
// Correo_e: "";
// Estrato: "0 a 5 personas";
// Id: "8063";
// Latitud: "21.89669022";
// Longitud: "-102.26151149";
// Nombre: "ABARROTES ALE";
// Num_Exterior: "110";
// Num_Interior: "0";
// Razon_social: "";
// Sitio_internet: "";
// Telefono: "";
// Tipo: "Fijo";
// Tipo_vialidad: "CALLE";
// Ubicacion: "AGUASCALIENTES, Aguascalientes, AGUASCALIENTES";
// nom_corredor_industrial: "";
// numero_local: "";
// tipo_corredor_industrial: "";
