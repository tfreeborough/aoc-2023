import { readFile } from '../../readfile.js';

const directory = 'inputData';

const seeds = readFile(`./day5/${directory}/0-seeds.txt`)
  .filter((row) => row.length > 0)
  .map((row) => row.trim().replace(/[\n\r]+/g, ''));

const seedToSoil = readFile(`./day5/${directory}/1-seed-to-soil.txt`)
  .filter((row) => row.length > 0)
  .map((row) => row.trim().replace(/[\n\r]+/g, ''));

const soilToFertilizer = readFile(`./day5/${directory}/2-soil-to-fertilizer.txt`)
  .filter((row) => row.length > 0)
  .map((row) => row.trim().replace(/[\n\r]+/g, ''));

const fertilizerToWater = readFile(`./day5/${directory}/3-fertilizer-to-water.txt`)
  .filter((row) => row.length > 0)
  .map((row) => row.trim().replace(/[\n\r]+/g, ''));

const waterToLight = readFile(`./day5/${directory}/4-water-to-light.txt`)
  .filter((row) => row.length > 0)
  .map((row) => row.trim().replace(/[\n\r]+/g, ''));

const lightToTemperature = readFile(`./day5/${directory}/5-light-to-temperature.txt`)
  .filter((row) => row.length > 0)
  .map((row) => row.trim().replace(/[\n\r]+/g, ''));

const temperatureToHumidity = readFile(`./day5/${directory}/6-temperature-to-humidity.txt`)
  .filter((row) => row.length > 0)
  .map((row) => row.trim().replace(/[\n\r]+/g, ''));

const humidityToLocation = readFile(`./day5/${directory}/7-humidity-to-location.txt`)
  .filter((row) => row.length > 0)
  .map((row) => row.trim().replace(/[\n\r]+/g, ''));


function sourceSort(a, b){
  if(a.source < b.source){
    return -1;
  }
  if(a.source > b.source){
    return 1;
  }
  return 0;
};

const allSeeds = [];
const rawSeeds = seeds[0].split(' ');
rawSeeds.forEach((seed, i) => {
  const isSeed = i % 2 === 0;
  if(isSeed){
    const range = parseInt(rawSeeds[i+1], 10);
    allSeeds.push(parseInt(seed,10))
    allSeeds.push(parseInt(seed,10)+range);
  }
})
allSeeds.sort((a,b) => {
  if(a<b){ return -1; }
  if(a>b){ return 1; }
  return 0;
})
console.log(allSeeds);



const seedToSoilMap = seedToSoil.map((row) => {
  const split = row.split(' ');
  return {
    destination: parseInt(split[0],10),
    source: parseInt(split[1],10),
    size: parseInt(split[2],10)
  }
}).sort(sourceSort);

const soilToFertilizerMap = soilToFertilizer.map((row) => {
  const split = row.split(' ');
  return {
    destination: parseInt(split[0],10),
    source: parseInt(split[1],10),
    size: parseInt(split[2],10)
  }
}).sort(sourceSort);

const fertilizerToWaterMap = fertilizerToWater.map((row) => {
  const split = row.split(' ');
  return {
    destination: parseInt(split[0],10),
    source: parseInt(split[1],10),
    size: parseInt(split[2],10)
  }
}).sort(sourceSort);

const waterToLightMap = waterToLight.map((row) => {
  const split = row.split(' ');
  return {
    destination: parseInt(split[0],10),
    source: parseInt(split[1],10),
    size: parseInt(split[2],10)
  }
}).sort(sourceSort);

const lightToTemperatureMap = lightToTemperature.map((row) => {
  const split = row.split(' ');
  return {
    destination: parseInt(split[0],10),
    source: parseInt(split[1],10),
    size: parseInt(split[2],10)
  }
}).sort(sourceSort);

const temperatureToHumidityMap = temperatureToHumidity.map((row) => {
  const split = row.split(' ');
  return {
    destination: parseInt(split[0],10),
    source: parseInt(split[1],10),
    size: parseInt(split[2],10)
  }
}).sort(sourceSort);

const humidityToLocationMap = humidityToLocation.map((row) => {
  const split = row.split(' ');
  return {
    destination: parseInt(split[0],10),
    source: parseInt(split[1],10),
    size: parseInt(split[2],10)
  }
}).sort(sourceSort);

let lowestLocation = null;

allSeeds.forEach((seed, i) => {
  if(i % 2 === 0){
    const maxRange = allSeeds[i+1];
    console.log(maxRange);
    for(let i=seed; i<maxRange; i++){
      const seed = i;
      let soil = 0;
      let fertilizer = 0;
      let water = 0;
      let light = 0;
      let temperature = 0;
      let humidity = 0;
      let location = 0;

      seedToSoilMap.forEach((map, index) => {
        if(seed >= map.source && seed <= map.source+map.size){
          const diff = seed - map.source;
          soil = map.destination + diff;
        }
        if(index === seedToSoilMap.length-1 && soil === 0){
          soil = seed;
        }
      })
      soilToFertilizerMap.forEach((map, index) => {
        if(soil >= map.source && soil <= map.source+map.size){
          const diff = soil - map.source;
          fertilizer = map.destination + diff;
        }
        if(index === soilToFertilizerMap.length-1 && fertilizer === 0){
          fertilizer = soil;
        }
      })

      fertilizerToWaterMap.forEach((map, index) => {
        if(fertilizer >= map.source && fertilizer <= map.source+map.size){
          const diff = fertilizer - map.source;
          water = map.destination + diff;
        }
        if(index === fertilizerToWaterMap.length-1 && water === 0){
          water = fertilizer;
        }
      })

      waterToLightMap.forEach((map, index) => {
        if(water >= map.source && water <= map.source+map.size){
          const diff = water - map.source;
          light = map.destination + diff;
        }
        if(index === waterToLightMap.length-1 && light === 0){
          light = water;
        }
      })

      lightToTemperatureMap.forEach((map, index) => {
        if(light >= map.source && light <= map.source+map.size){
          const diff = light - map.source;
          temperature = map.destination + diff;
        }
        if(index === lightToTemperatureMap.length-1 && temperature === 0){
          temperature = light;
        }
      })

      temperatureToHumidityMap.forEach((map, index) => {
        if(temperature >= map.source && temperature <= map.source+map.size){
          const diff = temperature - map.source;
          humidity = map.destination + diff;
        }
        if(index === temperatureToHumidityMap.length-1 && humidity === 0){
          humidity = temperature;
        }
      })

      humidityToLocationMap.forEach((map, index) => {
        if(humidity >= map.source && humidity <= map.source+map.size){
          const diff = humidity - map.source;
          location = map.destination + diff;
        }
        if(index === humidityToLocationMap.length-1 && location === 0){
          location = humidity;
        }
      })

      /*
      console.log('seed',seed);
      console.log('soil',soil);
      console.log('fertilizer',fertilizer);
      console.log('water',water);
      console.log('light',light);
      console.log('temperature',temperature);
      console.log('humidity',humidity);
      console.log('location',location);
      */
      if(lowestLocation === null || lowestLocation > location){
        lowestLocation = location;
      }
    }
  }

})



console.log('lowest location', lowestLocation);

