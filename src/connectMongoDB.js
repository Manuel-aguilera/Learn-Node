const connection = require("./connection/connection");

const insert = async () => {
	const { client, db } = await connection(); //obtenemos la conección
	//insertamos un usuario
	await db.collection("users").insertOne({
		user: "Adilene Carbajal Garcia",
		create_at: new Date(),
		email: "adi.c.g@gmail.com",
	});

	setTimeout(() => {
		client.close();
	}, 5000);
};

const init = async () => {
	await insert();
};

init();
