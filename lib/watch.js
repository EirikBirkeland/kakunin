const fs = require('fs');

/**
 * @param  {string} folder - a folder path to watch
 * @returns {} - return an object containing file watch results
 */
class Watcher {
	constructor () {
		this.w;
	}
	start (folder, cb) {
		this.w = fs.watch(folder, (eventType, filename) => {
			return cb({
				eventType: eventType,
				filename: filename,
			})
		});
	}
	stop () {
		this.w.close();
	}
} 

module.exports = Watcher;