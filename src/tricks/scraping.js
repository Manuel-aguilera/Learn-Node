const puppeteer = require("puppeteer");

(async () => {
	console.log("Lanzamos el browser");
	const browser = await puppeteer.launch({ headless: true });
	const page = await browser.newPage();
	await page.goto("https://nodejs.org/api/index.html");

	await page.pdf({ path: "./src/tricks/node.pdf", format: "A4" });
	// await page.screenshot({ path: "./src/tricks/node.png" });

	// var titulo1 = await page.evaluate(() => {
	// 	const h1 = document.querySelector("h1");
	// 	console.log(h1.innerHTML);
	// 	return h1.innerHTML;
	// });
	// console.log(titulo1);

	console.log("Cerramos el browser");
	await browser.close();
})();
