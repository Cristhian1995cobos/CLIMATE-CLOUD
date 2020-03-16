import paho.mqtt.client as mqtt
import time
import ssl
import sys
import random

host          = "node02.myqtthub.com"
port          = 1883
clean_session = True
client_id     = "SIMULADOR"
user_name     = "SIMULADOR"
password      = "123456789"


def on_connect (client, userdata, flags, rc): #funcion llamada cuando nos conectemos correctamente
    """ Callback called when connection/reconnection is detected """
    print ("Connectado como receptor a %s con exito" % (host))
    client.subscribe(topic='sensor', qos=1)
    client.subscribe(topic='sensores/humedad', qos=1)
  #  client.subscribe("sensor")

def on_message(client, userdata, msg):#funcion para cuando llega un mensaje
    print (msg.payload.decode("utf-8"))
    print("message received " ,str(msg.payload.decode("utf-8")))
    print("message topic=",msg.topic)
    print("message qos=",msg.qos)
    print("message retain flag=",msg.retain)




# client = paho.mqtt.client.Client(client_id='albert-subs', clean_session=False)
   
def main():
   
    # definimos el cliente, host, usuario y ontraseña introducidad al comienzo
    client = mqtt.Client (client_id = client_id, clean_session = False)
    client.username_pw_set (user_name, password)
    client.on_connect = on_connect
    client.on_message = on_message

    # conectamos al cliente con el host de el servidos mqtt, el puerto 1833, y keepalive 60
    client.connect (host, port, keepalive = 60)
    #client.loop ()
    client.loop_forever()
 
if __name__ == '__main__':
    main()
 
sys.exit(0)    


 