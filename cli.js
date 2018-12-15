const program = require('commander');
 
program
  .version('0.1.0')
  .option('-w, --watch [folder]', 'Folder to watch', './)
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);
