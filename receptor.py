import paho.mqtt.client as mqtt
import time
import ssl
import sys
import random

host          = "ioticos.org"
port          = 1883
clean_session = True
client_id     = "CLIMATECLOUD"
user_name     = "rJ6XFUSwA6ypIHM"
password      = "aTuDefz29HIVrlr"

def on_connect (client, userdata, flags, rc): #funcion llamada cuando nos conectemos correctamente
  """ Callback called when connection/reconnection is detected """
  print ("Connectado como receptor a %s con exito" % (host))
  client.subscribe(topic='m4xvQf1qekvtaCH/temperatura', qos=1)
 

def on_message(client, userdata, msg):#funcion para cuando llega un mensaje
 
  print("message received " ,str(msg.payload.decode("utf-8")))
  print("message topic=",msg.topic)
  print("message qos=",msg.qos)
  print("message retain flag=",msg.retain)


# definimos el cliente, host, usuario y contraseña introducidas al comienzo
client = mqtt.Client (client_id = client_id, clean_session = clean_session)
client.username_pw_set (user_name, password)
client.on_connect = on_connect  
client.on_message = on_message

# conectamos al cliente con el host de el servidos mqtt, el puerto 1833, y keepalive 60
client.connect (host, port, keepalive = 60)


while True:
  client.loop ()
