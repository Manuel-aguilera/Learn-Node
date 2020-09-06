const sharp = require("sharp");

sharp("./src/paquetes/utiles/original.png")
	.resize(80)
	.toFile("./src/paquetes/utiles/resized.png");
