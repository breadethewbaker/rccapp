const fs = require('fs');
let fString = fs.readFileSync('/home/brett/websites/rccapp/data/out.json');
let obj = JSON.parse(fString);

console.log(obj["ALUMNI ARENA"]["Total"]);
