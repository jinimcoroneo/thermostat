$( document ).ready(function() {

  var thermostat = new Thermostat;

  outputTemp();

  $( "#mode" ).text(function() {
    return thermostat.getMode();
  })

  $( "#up_button" ).click(function() {
      thermostat.up();
    outputTemp();
    usage();
  });

  $ ( "#down_button" ).click(function() {
      thermostat.down();
    outputTemp();
    usage();
  });

  $ ( "#reset_button" ).click(function() {
      thermostat.reset();
    outputTemp();
    usage();
  })

  $ ( "#power_saving" ).click(function() {
      thermostat.switchPowerSavingMode();
      $( "#mode" ).text(function() {
        return thermostat.getMode();
      })
  })

  function outputTemp() {
    $( "#current_temp" ).text(function() {
      return thermostat.temperature;
    })
  };

  function usage() {
    $( "#background" ).attr( "class", thermostat.energyUsage() );
  };
});
