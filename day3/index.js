const fs = require('fs');

const file = fs.readFileSync('data.txt', 'utf8');
const textlines = file.split('\n');

console.log(textlines);
