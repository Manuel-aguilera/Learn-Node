// Importamos la librería de mongo
const { MongoClient, connect } = require("mongodb");
// Database
const dbName = "crimenes";
// URL connection
const URL = "mongodb://localhost:27017";

const client = new MongoClient(URL, {
	useUnifiedTopology: true,
});

module.exports = async () => {
	//Conectamos al servidor
	await client.connect();
	//Retornamos la conexión con el nombre de la BD a usar
	db = client.db(dbName);
	return { client, db };
};
