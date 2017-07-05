var defaultTemperature = 20;

function Thermostat() {
  this.temperature = defaultTemperature;
};

Thermostat.prototype.up = function (number) {
  return (this.temperature += number);
};


Thermostat.prototype.down = function (number) {
  return (this.temperature -= number);
};
