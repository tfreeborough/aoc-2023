import { readFile } from '../../readfile.js';

const data = readFile('./day1/input.txt');


let total = 0;
data.forEach((row) => {
    let first = '';
    let last = '';

    const regex = /^\d+$/;

    const newRow = row
        .replaceAll('one','one1one')
        .replaceAll('two','two2two')
        .replaceAll('three','three3three')
        .replaceAll('four','four4four')
        .replaceAll('five','five5five')
        .replaceAll('six','six6six')
        .replaceAll('seven','seven7seven')
        .replaceAll('eight','eight8eight')
        .replaceAll('nine','nine9nine')

    console.log(row);
    console.log(newRow);

    newRow.split('').forEach((char) => {
        if(first.length === 0 && regex.test(char)){
            first = char;
        }
    });
    [...newRow.split('').reverse()].forEach((char) => {
        if(last.length === 0 && regex.test(char)){
            last = char;
        }
    });

    const number = parseInt(`${first}${last}`,10);
    console.log(`adding ${number}`)
    total+=number;
});

console.log(total);