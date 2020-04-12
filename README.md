# Data monitoring application
## Objetives:
- Create a root topic in a mqtt server
- Create a python script to simulate the data sent to mqtt server by real sensors of the following variables:
    - Temperatura
    - Relative Humidity
    - Air quality
-Create an application for mobile devices with React Native, to view the data published on the mqtt server.

## MQTT Server


For this project it was decided to use the [**ioticos.org**](ioticos.org) server, where you must create a free account and create the 3 subtopics that handle each variable.
- /tempertura
- /calidadaire
- /humedad

## Python script

The script developed in python is located in the main path of the repository under the name of **publicador mqtt.py**, and its function is to send a data of each monitored variable every 5 seconds.


*



cd ClimateCloudApp
Correr la app
npx react-native run-android



estructura
pantallas en screens
librerias en node_modules

para isntalar REACT NAVIGATION
Visitar reactnavigation.org
    npm install @react-navigation/native
    
