const fs = require('fs');

const file = fs.readFileSync('day1.txt', 'utf8');
const textlines = file.split('\n');

const numArr = [];

textlines.forEach((line) => {
  for (let index = 0; index < line.length; index++) {
    const element1 = line[index];
    if (element1.charCodeAt() >= 48 && element1.charCodeAt() <= 57) {
      for (let index = line.length - 1; index >= 0; index--) {
        const element2 = line[index];
        if (element2.charCodeAt() >= 48 && element2.charCodeAt() <= 57) {
          numArr.push(`${element1}${element2}`);
          break;
        }
      }
      break;
    }
  }
});

console.log(numArr.length);

console.log(numArr.reduce((acc, value) => acc + Number(value), 0));
