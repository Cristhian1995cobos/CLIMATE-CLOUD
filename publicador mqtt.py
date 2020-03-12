import paho.mqtt.client as mqtt
import time
import ssl
import random

host          = "node02.myqtthub.com"
port          = 1883
clean_session = True
client_id     = "SIMULADOR"
user_name     = "SIMULADOR"
password      = "123456789"


def on_connect (client, userdata, flags, rc): #funcion llamada cuando nos conectemos correctamente
    """ Callback called when connection/reconnection is detected """
    print ("Connectado a %s con exito" % (host))

    # client.subscribe("sensores/humedad")

def on_message(client, userdata, msg):#funcion para cuando llega un mensaje
    print (msg.payload.decode("utf-8"))

# definimos el cliente, host, usuario y ontraseña introducidad al comienzo
client = mqtt.Client (client_id = client_id, clean_session = clean_session)
client.username_pw_set (user_name, password)
client.on_connect = on_connect
client.on_message = on_message

# conectamos al cliente con el host de el servidos mqtt, el puerto 1833, y keepalive 60
client.connect (host, port, keepalive = 60)

a= float(0)
while True: #Loop infinito que enviara los datos de las diferentes medidas de los sensores

    a=random.uniform(13,15)#creo un valor aleatorio de temperatura
    ret = client.publish ("sensores/temperatura", a,qos=1)#envio el valor aleatorio
    a=random.uniform(50,100)#creo un valor aleatorio de humedad
    ret = client.publish ("sensores/humedad", a,qos=1)#creo un valor aleatorio de humedad
    a=random.uniform(30,50)#creo un valor aleatorio de humedad
    ret = client.publish ("sensores/calidadaire", a,qos=1)#creo un valor aleatorio de humedad


    client.loop ()
    time.sleep (5)
   
   
#print ("Publish operation finished with ret=%s" % ret)

# close connection
client.disconnect ()