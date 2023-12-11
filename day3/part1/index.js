import { readFile } from '../../readfile.js';

const data = readFile('./day3/input.txt');

/**
 * X Shift, Y Shift i.e. Row 1: Left 1 then up 1
 * @type {number[][]}
 */
const checkingArray = [
    [-1,-1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [0, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1]
]

let mapped = [];

function findFullPart(row, column, part){
    if(part.match(new RegExp(/[0-9]/))){
        let parts = `${part}`;
        let leftPeek = 1;
        let rightPeek = 1;
        while(leftPeek !== null){
            const character = data[row][column-leftPeek];
            if(character && character.match(new RegExp(/[0-9]/))){
                parts = `${data[row][column-leftPeek]}${parts}`;
                leftPeek+= 1;
            } else {
                leftPeek = null;
            }
        }
        while(rightPeek !== null){
            const character = data[row][column+rightPeek];
            if(character && character.match(new RegExp(/[0-9]/))){
                parts = `${parts}${data[row][column+rightPeek]}`;
                rightPeek+= 1;
            } else {
                rightPeek = null;
            }
        }
        return parts
    }
    return '';
}
function checkAround(row, column){
    const hits = [];
    checkingArray.forEach((coords) => {
        const left = coords[0];
        const top = coords[1];
        const place = data[row+top][column+left].match(new RegExp(/[^.]/));
        if(place){
            const part = findFullPart(row+top, column+left, place[0])
            hits.push(part);
            // console.log('found hit', place);
            // console.log('part', part);
        }
    })
    return new Set(hits.filter((hit) => {
        return hit.length > 0;
    }));
}

data.forEach((row, rowIndex) => {
    const characters = row.split('');
    characters.forEach((character, columnIndex) => {
        const isSpecial = character.match(new RegExp(/(?=[^0-9])([^.])/));
        if(isSpecial){
            const found = checkAround(rowIndex, columnIndex);
            mapped.push(found);
        }
    })
})

let sum = 0;
mapped.forEach((set) => {
    for (const value of set) {
        sum += parseInt(value, 10);
    }
})

console.log(sum);