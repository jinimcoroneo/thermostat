'use strict';

describe("Thermostat", function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("defaults to 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("has a minimum temperature of 10 degrees", function() {
    expect(thermostat.min).toEqual(10);
  });

  it("defaults with the power saving mode on", function() {
    expect(thermostat.powerSavingModeOn).toEqual(true);
  });

  describe("has an up function that", function() {
    it("can increase the temperature", function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });

    it("cannot go above 25 degrees if saving mode is on", function() {
      thermostat.temperature = 25;
      expect(function() {
        thermostat.up();
      }).toThrow(new ThermostatException("Can't go above " + thermostat.maxTemperatureModeOn + " temperature"));
    });

    it("cannot go above 32 degrees if saving mode is off", function() {
      thermostat.temperature = 32;
      thermostat.switchPowerSavingMode();
      expect(function() {
        thermostat.up();
      }).toThrow(new ThermostatException("Can't go above " + thermostat.maxTemperatureModeOff + " temperature"));
    });

  });

  describe("has a down function that", function() {
    it("can decrease the temperature", function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });

    it("cannot go below the minimum temperature", function() {
      thermostat.temperature = 10;
      expect(function() {
        thermostat.down();
      }).toThrow(new ThermostatException("Can't go below the " + thermostat.min + "temperature"));
    })
  });

  describe("has a power saving mode function that", function() {
    it("when on, changes the max temperature to 25 degrees", function() {
      thermostat.switchPowerSavingMode();
      expect(thermostat.powerSavingModeOn).toEqual(false);
    });
  });

  describe("has a reset function", function() {
    it("can reset the temperature to 20", function() {
      thermostat.temperature = 30;
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe("has a current energy usage function", function() {
    it("can report medium usage", function() {
      expect(thermostat.energyUsage()).toEqual("medium-usage");
    });
    it("can report low usage", function() {
      thermostat.temperature = 15
      expect(thermostat.energyUsage()).toEqual("low-usage");
    });
    it("can report high usage", function() {
      thermostat.temperature = 30
      expect(thermostat.energyUsage()).toEqual("high-usage");
    });
  });

  describe("has a function to say if power saving mode is on or off", function() {
    it("can return on when power saving mode is on", function() {
      expect(thermostat.getMode()).toEqual("on");
    })
  })
});
