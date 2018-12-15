const watch = require('./watch');
const fs = require('fs');

test('test file monitoring', (done) => {
   watch('./', (res) => {
      console.log(res)
      done();
   })
   // write new file
   fs.closeSync(fs.openSync("tmpfiletodelete", 'w'));
});