# Data monitoring application
## Objetives:
- Create a root topic in a mqtt server
- Create a python script to simulate the data sent to mqtt server by real sensors of the following variables:
    - Temperatura
    - Relative Humidity
    - Air quality
-Create an application for mobile devices with React Native, to view the data published on the mqtt server.

## MQTT Broker


For this project it was decided to use the [**ioticos.org**](www.ioticos.org) server, where you must create a free account and create the 3 subtopics that handle each variable.
- /tempertura
- /calidadaire
- /humedad

## Python script

###### Publisher

The script developed in python is located in the main path of the repository under the name of **publicador mqtt.py**, and its function is to send a data of each monitored variable every 5 seconds. All the values are random numbers which are under limits referenced to the real behaviour of the environment variables.  

###### Receptor

The script developed in python is located in the main path of the repository under the name of **receptor.py**, and its function is to test the communication and the status of the mqqt server, this program subscribes to the different topics and shows the received data by console.

## Climate Cloud Mobile App

This is the mobile monitoring application and was developed in React Native, the code of this application can be found in the **ClimateCloud** folder at the root of this repository.

###### LOGIN



<p align="center">
<img src="https://github.com/cristhian1995cobos/JRTEC/tree/master/Captures/LOGIN1.JPG" height="350">
</p>  


cd ClimateCloudApp
Correr la app
npx react-native run-android



estructura
pantallas en screens
librerias en node_modules

para isntalar REACT NAVIGATION
Visitar reactnavigation.org
    npm install @react-navigation/native
    
