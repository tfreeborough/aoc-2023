import { readFile } from '../../readfile.js';

/*
const times = [7, 15, 30];
const distances = [9, 40, 200];
*/
const times = [49,87,78,95];
const distances = [356,1378,1502,1882];

let totalBeatenRecords = 1; // Set to 1 initially for the multiplication to work.
times.forEach((time, index) => {
    let beatenRecords = 0;
    const distance = distances[index];
    for(let i=time; i >= 0; i--){
        const mm = time-i;
        const travel = (time-i) * i
        console.log(`Race ${index+1} travel with ${i}ms ${travel}mm`)
        if(travel > distance){
            beatenRecords++;
        }
    }
    totalBeatenRecords = totalBeatenRecords * beatenRecords;
})

console.log('Beaten Records:', totalBeatenRecords);