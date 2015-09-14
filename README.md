# monitor_temperatura_arduino
Monitor de temperatura pela internet usando Arduino e Firebase.

[Demo](https://medidortemperatura.firebaseapp.com/)
  
# Instruções
  
1. Execute `npm install` para instalar as dependências.  
2. Crie um novo app no Firebase e substitua a URL deste projeto (medidortemperatura.firebaseio.com).  
3. Execute `node index` para iniciar o monitoramento.  
4. Hospede a pasta `/static` para visualizar o gráfico de temperatura.  
  
# Instruções para o Arduino  
1. [Compile StandardFirmata](https://www.arduino.cc/en/Reference/Firmata) para o arduino.  
2. Conecte o sensor de temperatura a uma breadboard.  
  2.1 No caso do sensor LM35:  
    * Pino 1 no 3.3V.  
    * Pino 2 no A1.  
    * Pino 3 no GND.  
