describe("Thermostat", function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });
  
  it("defaults to 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
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
  });
  
  
});
