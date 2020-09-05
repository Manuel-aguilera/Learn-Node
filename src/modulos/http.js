const http = require("http");

const router = (req, res) => {
	console.log("nueva petición");
	console.log(req.url);

	switch (req.url) {
		case "/hola":
			res.writeHead(201, { "Content-Type": "text/plain; charset=utf-8" });
			res.write("Hola que tal");
			res.end();
			break;
		default:
			res.writeHead(201, { "Content-Type": "text/plain; charset=utf-8" });
			res.write("Error 404: no sé que es lo que quieres");
			res.end();
	}

	// res.writeHead(201, { "Content-Type": "text/plain" });

	// res.write("Hola ya se usar http de Node.js");

	// res.end();
};

http.createServer(router).listen(3000);

console.log("Escuchando http en el puerto 3000");
