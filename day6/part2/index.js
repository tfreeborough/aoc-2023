import { readFile } from '../../readfile.js';

/*
const time = 71530;
const distance = 940200;
*/

const time = 49877895;
const distance = 356137815021882;


let totalBeatenRecords = 1; // Set to 1 initially for the multiplication to work.
let beatenRecords = 0;
for(let i=time; i >= 0; i--){
    const mm = time-i;
    const travel = (time-i) * i
    if(i % 100000 === 0){
        console.log(`Travel with ${i}ms ${travel}mm`)
    }
    if(travel > distance){
        beatenRecords++;
    }
}
totalBeatenRecords = totalBeatenRecords * beatenRecords;

console.log('Beaten Records:', totalBeatenRecords);