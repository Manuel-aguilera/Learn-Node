const bcrypt = require("bcrypt");

const password = "1234Segura!";

// bcrypt.hash(password, 13, (err, hash) => {
// 	console.log(hash);
// 	bcrypt.compare(password, hash, (err, res) => {
// 		console.log(res);
// 	});
// });

const encriptar = async () => {
	let hash = await bcrypt.hash(password, 13); //rounds 13: 1 sec/hash
	console.log(hash);
	return hash;
};

const userPassword = async () => {
	let hash = await encriptar();
	let isPassword = await bcrypt.compare(password, hash);
	if (isPassword) {
		console.log(`La contraseña ${password} es correcta`);
	} else {
		console.log("La contraseña es incorrecta");
	}
};

userPassword();
