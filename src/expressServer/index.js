const morgan = require("morgan");
const path = require("path");
const express = require("express");
const app = express();

// function logger(req, rep, next) {
// 	console.log(
// 		`Route received: ${req.protocol}://${req.hostname}${req.originalUrl}`
// 	);
// 	next();
// }

//settings
app.set("appName", "Express tutorial");
app.set("port", "5000");
app.set("view engine", "ejs");

//middleware
app.use(express.json());
// app.use(logger);
app.use(morgan("dev"));

//Routers
app.get("/", (req, res) => {
	const data = [
		{ name: "manuel" },
		{ name: "jesus" },
		{ name: "adan" },
		{ name: "bryan" },
	];
	res.render("index.ejs", { people: data });
});

app.all("/user", (req, res, next) => {
	console.log("Por aquí pasó get");
	next();
});

app.all("/user/:id", (req, res, next) => {
	console.log("Por aquí pasó post, put o delete");
	next();
});

app.get("/user", (req, res) => {
	res.json({
		username: "Manuel",
		lastname: "Aguilera",
	});
});

app.post("/user/:id", (req, res) => {
	console.log(req.body);
	console.log(req.params);
	res.send(`Post request received ${req.params.id}`);
});

app.delete("/user/:id", (req, res) => {
	const datos = `User id: ${req.params.id} ha sido eliminado`;
	console.log(datos);
	res.send(datos);
});

app.put("/user/:id", (req, res) => {
	console.log(req.body);
	res.send(`User ${req.params.id} actualizado`);
});

// app.use("/user", express.static(path.join(__dirname, "public")));  //middleware

app.listen(app.get("port"), () => {
	console.log(app.get("appName"));
	console.log(`Server on port ${app.get("port")}`);
});
