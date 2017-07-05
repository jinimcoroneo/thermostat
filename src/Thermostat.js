var defaultTemperature = 20;
var minTemperature = 10;
var maxTemperatureModeOn = 25;

function ThermostatException(message) {
  this.name = "ThermostatException";
  this.message = message;
}

function Thermostat() {
  this.temperature = defaultTemperature;
  this.min = minTemperature;
  this.powerSavingModeOn = true;
};

Thermostat.prototype.up = function(number) {
  return (this.temperature += number);
};


Thermostat.prototype.down = function(number) {
  if(this.temperature - number < this.min) {
    throw new ThermostatException("Can't go below the " + this.min + "temperature")
  }
  return (this.temperature -= number);
};


Thermostat.prototype.switchPowerSavingMode = function() {
  return this.powerSavingModeOn = !this.powerSavingModeOn
};
