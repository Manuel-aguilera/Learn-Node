"use strict";

const url = require("url"),
	crypto = require("crypto");

module.exports = (req) => {
	let r = url.parse(req.headers.referer || ""),
		ref = r.href ? r.protocol + r.host + r.pathname : null;
	// console.log(req.headers);
	return ref ? crypto.createHash("md5").update(ref).digest("hex") : null;
};
