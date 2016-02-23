# Real-time temperature monitoring
Real-time temperature monitoring using Arduino and Firebase

[Demo](https://medidortemperatura.firebaseapp.com/)  
  
# Instructions  
  
1. Execute `npm install` to install the dependencies.  
2. Create a new Firebase app and change this project's URL (medidortemperatura.firebaseio.com).  
3. Execute `node index` to start.  
4. Host the `/static` folder to watch the temperature.  
  
# Instructions (Arduino)  
![arduino](http://i.imgur.com/7JvMLVX.png)  
1. [Compile StandardFirmata](https://www.arduino.cc/en/Reference/Firmata) in your arduino.  
2. Plug the temperature sensor in the breadboard.  
  2.1 If you're using the LM35:  
    * Pin 1 - 3.3V.  
    * Pin 2 - A1.  
    * Pin 3 - GND.  
