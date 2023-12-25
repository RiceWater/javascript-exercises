const convertToCelsius = function(fahren) {
  let cels = (fahren - 32) * 5 / 9;
  if (Number.isInteger(cels))
    return cels;
  return Number.parseFloat(cels.toFixed(1));
};

const convertToFahrenheit = function(cels) {
  let fahren = (cels * 9 / 5) + 32; 
  if (Number.isInteger(fahren)) 
    return fahren;
  return Number.parseFloat(fahren.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
