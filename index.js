var five = require("johnny-five");
var Firebase = require('firebase');

var logger = new Firebase('https://medidortemperatura.firebaseio.com').child('logger');

five.Board().on("ready", function() {
  var temperature = new five.Temperature({
    controller: "LM35",
    pin: "A1",
    freq: 10000
  });

  temperature.on("data", function() {
    console.log(this.celsius + "°C", this.fahrenheit + "°F");
    logger.push().set({
      time: Firebase.ServerValue.TIMESTAMP,
      celsius: this.celsius,
      fahrenheit: this.fahrenheit
    });
  });

});