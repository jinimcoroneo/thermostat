$( document ).ready(function() {

  var thermostat = new Thermostat;

  outputTemp();

  $.get('http://api.openweathermap.org/data/2.5/weather?q=london&appid=20050ffc83e64ec58171c3e453f74bc7&units=metric', function(data) {
    $( '#temp' ).text(data.main.temp)
  })

  $('#current_city').change(function() {
    var city = $('#current_city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=20050ffc83e64ec58171c3e453f74bc7&units=metric', function(data) {
      $('#temp').text(data.main.temp)
    })
  })

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
