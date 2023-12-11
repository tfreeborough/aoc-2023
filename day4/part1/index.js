import { readFile } from '../../readfile.js';

const data = readFile('./day4/input.txt')
  .filter((row) => row.length > 0)
  .map((row) => row.trim().replace(/[\n\r]+/g, ''));

let total = 0;
data.forEach((row, index) => {
  const cleaned = row.replace(new RegExp(/Card [0-9]+: /),'');
  const winningNumbers = cleaned.split(' | ')[0].split(' ').filter((character) => { return character.length > 0});
  const checkingNumbers = cleaned.split(' | ')[1].split(' ').filter((character) => { return character.length > 0});;
  let wins = 0;
  let points = 0;
  checkingNumbers.forEach((number) => {
    winningNumbers.forEach((winningNumber) => {
      if(number === winningNumber){
        wins += 1;
      }
    })
  })
  for(let i = 0; i<wins; i++){
    if(points === 0){
      points = 1;
    } else {
      points *= 2;
    }
  }

  console.log(`wins for row ${index}`, wins);
  console.log(`points for row ${index}`, points);
  total += points;
})

console.log(total);
