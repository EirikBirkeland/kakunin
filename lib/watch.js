const fs = require('fs');

/**
 * @param  {string} folder - a folder path to watch
 * @returns {} - return an object containing file watch results
 */
function initWatcher (folder, cb) {
	fs.watch(folder, (eventType, filename) => {
		return cb({
			eventType: eventType,
			filename: filename,
		})
	});
}

module.exports = initWatcher;