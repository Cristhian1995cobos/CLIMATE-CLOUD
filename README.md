# Data monitoring application
## Objetives:
- Create a root topic in a mqtt server
- Create a python script to simulate the data sent to mqtt server by real sensors of the following variables:
    - Temperatura
    - Relative Humidity
    - Air quality
-Create an application for mobile devices with React Native, to view the data published on the mqtt server.

## MQTT Broker


For this project it was decided to use the **ioticos.org** server, where you must create a free account and create the 3 subtopics that handle each variable.
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

![alt text](https://github.com/cristhian1995cobos/JRTEC/tree/master/Captures/LOGIN1.PNG)

<p align="center">
<img src="https://github.com/cristhian1995cobos/JRTEC/tree/master/Captures/LOGIN1.PNG" height="450">
</p>  

This is the first screen that is displayed when opening the application, here there are two buttons, the setting button will open a second screen shown below.

<p align="center">
<img src="https://github.com/cristhian1995cobos/JRTEC/tree/master/Captures/LOGIN2.PNG" height="350">
</p>  

In this screen you can make all the necessary changes to the connection variables such as:
- Host
- Username
- Password
- Root Topic

###### ALERTS

In both cases when clicking on the connect button, we will see an alert, in case there is any connection error, the entry will not be allowed and the alert will be displayed:

<p align="center">
<img src="https://github.com/cristhian1995cobos/JRTEC/tree/master/Captures/ERROR.PNG" height="350">
</p>  

and in case we make a successful connection we will see the alert:

<p align="center">
<img src="https://github.com/cristhian1995cobos/JRTEC/tree/master/Captures/CONNECTED.PNG" height="350">
</p>  

In this alert we can return or enter through the **GET IN** button.

###### SCREENS

Once the entry is allowed, there is a drawer menu with the following options:
- **Temperature**
- **Air quality**
- **Humedity**
- **About us:** shows some information about the developer
- **Log out:** return the application to the **LOGIN**

<p align="center">
<img src="https://github.com/cristhian1995cobos/JRTEC/tree/master/Captures/OPTIONS.PNG" height="350">
</p>  


For the options of each variable there is a tabnavigator with two tabs:
- **GRAPHICS:** this tab shows a graph with the last 10 data received from the variable plus its current data    
- **DATA:** this tab shows a list with the last 10 data received from the variable and the time they were received

<p align="center">
<img src="https://github.com/cristhian1995cobos/JRTEC/tree/master/Captures/SCREEN1.PNG" height="350">
<img src="https://github.com/cristhian1995cobos/JRTEC/tree/master/Captures/SCREEN11.PNG" height="350">
</p>  
 

<p align="center">
<img src="https://github.com/cristhian1995cobos/JRTEC/tree/master/Captures/SCREEN2.PNG" height="350">

<img src="https://github.com/cristhian1995cobos/JRTEC/tree/master/Captures/SCREEN22.PNG" height="350">
</p> 

<p align="center">
<img src="https://github.com/cristhian1995cobos/JRTEC/tree/master/Captures/SCREEN3.PNG" height="350">

<img src="https://github.com/cristhian1995cobos/JRTEC/tree/master/Captures/SCREEN33.PNG" height="350">
</p>  


