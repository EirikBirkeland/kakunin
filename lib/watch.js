const chokidar = require('chokidar');

const fs = require('fs');

/**
 * @param  {string} folder - a folder path to watch
 * @returns {} - return an object containing file watch results
 */
class Watcher {
	constructor() {
		this.watcher;
	}
	start(folder, cb) {
		this.watcher = chokidar.watch(folder, { ignored: /^\./, persistent: true });
		this.watcher
			.on('add', cb)
			.on('change', cb)
			.on('unlink', cb)
			.on('error', cb)
	}

	stop() {
		this.watcher.close();
	}
}

module.exports = Watcher;