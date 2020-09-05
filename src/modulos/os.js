const os = require("os");

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus().length);
// console.log(os.constants);
const gb = (bytes) => {
	return bytes / 1024 / 1024 / 1024;
};
console.log(gb(os.freemem()));
console.log(gb(os.totalmem()));

console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.hostname());
// console.log(os.networkInterfaces());
