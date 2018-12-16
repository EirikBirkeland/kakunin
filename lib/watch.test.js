const Watcher = require('./watch');
const fs = require('fs');
const rimraf = require('rimraf')

describe('file system watch event', () => {
   it.only('file creation in root folder', (done) => {
      const watcher = new Watcher();
      watcher.start('./', (res) => {
         console.log(res)
         watcher.stop();
         done();
      });
      // write new file
      fs.closeSync(fs.openSync("tmpfiletodelete", 'w'));
   });
   
   it('file creation in sub-folder', (done) => {
      const watcher = new Watcher();
      // write new file
      fs.mkdirSync("tmpdir");
      watcher.start('./', (res) => {
         console.log(res)
         watcher.stop;
         done();
      });
      fs.closeSync(fs.openSync("tmpdir/tmpfileinsubdir", 'w'));
      rimraf.sync("tmpdir");
   });
})
