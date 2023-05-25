const getTemperatureForCity = () => {
  const cache = {};

  return function (city) {
    if (cache[city]) {
      console.log(`Got the data of temperature for ${city} from cache.`);
      return cache[city];
    }

    console.log(`Showing the data of temperature for ${city}`);
    const temperature = temperatureData[city];
    cache[city] = temperature;
    return temperature;
  };
};

const temperatureData = {
  "New York": 20,
  London: 18,
  Paris: 22,
  Tokyo: 25,
  Sydney: 28,
};

const getTemperature = getTemperatureForCity();

console.log(getTemperature("New York"));
console.log(getTemperature("New York"));
console.log(getTemperature("London"));
console.log(getTemperature("London"));
