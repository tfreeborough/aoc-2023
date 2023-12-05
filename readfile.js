import fs from 'fs';

export function readFile(filename){
    const data = fs.readFileSync(filename, 'utf8');
    return data.split('\n');
}
