import { readFile } from '../../readfile.js';

const data = readFile('./day2/input.txt');

let redTarget = 12;
const redRegex = new RegExp(/[0-9]+ red/,'g')

let blueTarget = 14;
const blueRegex = new RegExp(/[0-9]+ blue/,'g')

let greenTarget = 13;
const greenRegex = new RegExp(/[0-9]+ green/,'g')

const numberRegex = new RegExp(/[0-9]+/);

let sum = 0;
let power = 0;
data.forEach((row, index) => {
    const gameNumber = index+1;
    const games = row.replace(/Game [0-9]+: /gm,'').split(';');
    let valid = true;

    let redMax = 0;
    let greenMax = 0;
    let blueMax = 0;

    games.forEach((game) => {
            let bluePull = "0";

            if(game.match(blueRegex)){
                bluePull = game.match(blueRegex)[0];
            }

            let redPull = "0";
            if(game.match(redRegex)){
                redPull = game.match(redRegex)[0];
            }

            let greenPull = "0";
            if(game.match(greenRegex)){
                greenPull = game.match(greenRegex)[0]
            }


            const red = parseInt(numberRegex.exec(redPull)[0],10);
            const green = parseInt(numberRegex.exec(greenPull)[0],10);
            const blue = parseInt(numberRegex.exec(bluePull)[0], 10);

            if(red > redMax){ redMax = red; }
            if(green > greenMax){ greenMax = green; }
            if(blue > blueMax){ blueMax = blue; }

        if(valid){
            if(
                red > redTarget
                || green > greenTarget
                || blue > blueTarget
            ){
                valid = false;
            }
        }
    })
    console.log(`game ${gameNumber}`, valid);
    console.log(`game ${gameNumber} max`, redMax, greenMax, blueMax);
    console.log(`game ${gameNumber} power:`, redMax * greenMax * blueMax);
    power += (redMax * greenMax * blueMax);
    if(valid){
        sum += gameNumber;
    }
})

console.log('power', power);
console.log('sum', sum);