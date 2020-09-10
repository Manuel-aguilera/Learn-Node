//modules
const fileUtil = require("./fileutil"),
	httpReferrer = require("./httpreferrer"),
	path = require("path"),
	dataFolder = path.resolve("./data") + path.sep,
	//time
	saveFrequency = 10 * 1000;

module.exports = class {
	constructor() {
		//counter storage
		this.counter = {};

		(async () => {
			//store folder available?
			this.folder = await fileUtil.folderUsable(dataFolder);
			console.log(`Ruta> ${dataFolder}`);
			console.log(this.folder);
			if (!this.folder) return;

			//fetch all JSON files sorted most recent first
			this.saved = await fileUtil.folderList(this.folder.path, ".json");

			//import and merge latest data
			if (this.saved.length) {
				Object.assign(this.counter, require(this.saved[0].path));
			}
		})();
	}

	//increase URL counter
	count(req) {
		let hash = httpReferrer(req);
		if (!hash) return null;

		//define count default
		this.counter[hash] = this.counter[hash] || 0;

		//save event
		this.saveTimer =
			this.saveTimer || setTimeout(this.save.bind(this), saveFrequency);

		//return incremented
		return ++this.counter[hash];
	}

	async save() {
		//can save
		if (!this.folder) return;

		//save new file
		let fn = `${this.folder.path}hit${+new Date()}.json`;

		if (await fileUtil.write(fn, JSON.stringify(this.counter))) {
			console.log(`page hits stored: ${fn}`);

			// delete old folders
			fileUtil.unlinkMany(this.saved);

			// add current file to saved list
			this.saved = [{ path: fn }];
		}
		this.saveTimer = null;
	}
};
