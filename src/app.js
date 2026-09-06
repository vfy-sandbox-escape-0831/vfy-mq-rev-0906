const cp = require('child_process');
function run(userInput) { cp.exec('ls ' + userInput); }
module.exports = { run };
