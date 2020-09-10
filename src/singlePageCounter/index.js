"use strict";

const port = 3000,
	http = require("http"),
	url = require("url"),
	//page counter object
	pagehit = new (require("./lib/pagehit"))(),
	//http response
	httpresponse = require("./lib/httpresponse");

//new server
http
	.createServer((req, res) => {
		//get referring page count
		let count = pagehit.count(req);
		//error: referring page not found
		if (!count) {
			httpresponse({ res, status: 400, content: "No referrer" });
			return;
		}
		//send appropriate response
		let uri = url.parse(req.url).pathname;
		switch (uri) {
			//JS document.write() counter
			case "/counter.js":
				httpresponse({
					res,
					mime: "application/javascript",
					content: `document.write('<span class="pagecounter">${count}</span>');`,
				});
				break;
			default:
				console.log("No bitch");
				httpresponse({ res, status: 404, content: "Not found" });
				break;
		}
	})
	.listen(port);

console.log(`Page hit web service running on port ${port}`);

// const myURL = url.parse(
// 	"https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash"
// );
// console.log(myURL);
