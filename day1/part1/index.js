import { readFile } from '../../readfile.js';

const data = readFile('./day1/input.txt');


let total = 0;
data.forEach((row) => {
    let first = '';
    let last = '';

    const regex = /^\d+$/;
    row.split('').forEach((char) => {
        if(first.length === 0 && regex.test(char)){
            first = char;
        }
    });
    [...row.split('').reverse()].forEach((char) => {
        if(last.length === 0 && regex.test(char)){
            last = char;
        }
    });

    const number = parseInt(`${first}${last}`,10);
    console.log(`adding ${number}`)
    total+=number;
});

console.log(total);