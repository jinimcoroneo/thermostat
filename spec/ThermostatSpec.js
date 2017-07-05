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
      thermostat.up(2);
      expect(thermostat.temperature).toEqual(defaultTemperature + 2);
    });
  });

  describe("has a down function that", function() {
    it("can decrease the temperature", function() {
      thermostat.down(2);
      expect(thermostat.temperature).toEqual(defaultTemperature - 2);
    });

    it("cannot go below the minimum temperature", function() {
      expect(function() {
        thermostat.down(11);
      }).toThrow(new ThermostatException("Can't go below the " + thermostat.min + "temperature"));
    })
  });

  describe("has a power saving mode function that", function() {
    it("when on, changes the max temperature to 25 degrees", function() {
      thermostat.switchPowerSavingMode();
      expect(thermostat.powerSavingModeOn).toEqual(false);
    });
  });
});
