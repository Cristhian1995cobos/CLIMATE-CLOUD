import paho.mqtt.client as mqtt
import time
import ssl
import random

host          = "ioticos.org"
port          = 1883
clean_session = True
client_id     = "CLIMATECLOUD"
user_name     = "rJ6XFUSwA6ypIHM"
password      = "aTuDefz29HIVrlr"


def on_connect (client, userdata, flags, rc): #funcion llamada cuando nos conectemos correctamente
    """ Callback called when connection/reconnection is detected """
    print ("Connectado a %s con exito" % (host))

    client.subscribe("prueba")

def on_message(client, userdata, msg):#funcion para cuando llega un mensaje
    print (msg.payload.decode("utf-8"))

# definimos el cliente, host, usuario y contraseña introducidas al comienzo
client = mqtt.Client ()
client.on_connect = on_connect
client.on_message = on_message
client.username_pw_set (user_name, password)


# conectamos al cliente con el host de el servidos mqtt, el puerto 1833, y keepalive 60
client.connect (host, port, keepalive = 60)

a= float(0)
while True: #Loop infinito que enviara los datos de las diferentes medidas de los sensores

    a=random.uniform(13,15)#creo un valor aleatorio de temperatura
    ret = client.publish ("m4xvQf1qekvtaCH/temperatura", a,qos=1,retain=True)#envio el valor aleatorio
    a=random.uniform(50,100)#creo un valor aleatorio de humedad
    ret = client.publish ("m4xvQf1qekvtaCH/humedad", a,qos=1,retain=True)#creo un valor aleatorio de humedad
    a=random.uniform(30,50)#creo un valor aleatorio de calidad de aire
    ret = client.publish ("m4xvQf1qekvtaCH/calidadaire", a,qos=1,retain=True)#creo un valor aleatorio de clidad de aire
    print ("Envie")

    client.loop ()
    time.sleep (5)
   
   
#print ("Publish operation finished with ret=%s" % ret)

# close connection
client.disconnect ()