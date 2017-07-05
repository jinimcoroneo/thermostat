
function ThermostatException(message) {
  this.name = "ThermostatException";
  this.message = message;
}


function Thermostat() {
  this.temperature = 20;
  this.min = 10;
  this.maxTemperatureModeOn = 25;
  this.maxTemperatureModeOff = 32;
  this.powerSavingModeOn = true;
};

Thermostat.prototype.checkMax = function () {
  if (this.powerSavingModeOn) {
    return this.maxTemperatureModeOn
  } else {
    return this.maxTemperatureModeOff
  }
};

Thermostat.prototype.up = function() {
  if (this.powerSavingModeOn && this.temperature === this.checkMax()) {
    throw new ThermostatException("Can't go above " + this.maxTemperatureModeOn + " temperature")
  }
  if (this.temperature === this.checkMax()) {
    throw new ThermostatException("Can't go above " + this.maxTemperatureModeOff + " temperature")
  }
  return (this.temperature ++);
};


Thermostat.prototype.down = function() {
  if(this.temperature - 1  < this.min) {
    throw new ThermostatException("Can't go below the " + this.min + "temperature")
  }
  return (this.temperature --);
};


Thermostat.prototype.switchPowerSavingMode = function() {
  return this.powerSavingModeOn = !this.powerSavingModeOn
};
