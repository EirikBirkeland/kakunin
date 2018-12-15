const initWatcher = require('./lib/watch');

const validFormats = ['xlf', 'tsv'];

initWatcher("./", ({ eventType, filename }) => {
   console.log(eventType, filename)

   // if filename is a valid input format, run QA check

});