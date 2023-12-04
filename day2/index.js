const fs = require('fs');

const file = fs.readFileSync('data.txt', 'utf8');
const textlines = file.split('\n');

const gameData = {};
const cubeLimits = { red: 12, green: 13, blue: 14 };
let total = 0;

textlines.forEach((line, index) => {
  let cubeObject = {};
  const cubes = line.slice(line.indexOf(': ') + 2).split(/[;,]+/);

  cubes.forEach((item, index) => {
    let [number, color] = item.split(' ').filter((element) => element !== '');
    number = parseInt(number);

    if (!cubeObject[color]) {
      cubeObject[color] = [];
    }
    cubeObject[color].push(number);
  });

  gameData[index + 1] = cubeObject;
});

for (const game in gameData) {
  for (const color in gameData[game]) {
    if (Math.max(...gameData[game][color]) > cubeLimits[color]) {
      delete gameData[game];
      break;
    }
  }
}

for (const game in gameData) {
  total += Number(game);
}

console.log(total);
