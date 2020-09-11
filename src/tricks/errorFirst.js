const { parseZone } = require("moment");

function asicrona(callback) {
	setTimeout(() => {
		try {
			let a = 3 + 1;
			callback(null, a);
		} catch (e) {
			callback(e);
		}
	}, 1000);
}

asicrona(function (err, dato) {
	if (err) {
		console.error("Tenemos un error");
		console.error(err.message);
		//throw err; //no funciona con funciones asíncronas
		return false;
	}
	console.log(`Todo ha ido bien, mi dato es: ${dato}`);
});
