//SCRIPT DEL MENU DRAWER (LLAMA A LAS TRES OPCIONES: TMPERATURASCREEN, CALIDADSCREEN Y HUMEDADSCREEN)
import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image} from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import s from '../../components/style'

import TemperaturaScreen from '../Temperatura/TEMPERATURA'
import CalidadScreen from '../Calidad/CALIDAD'
import HumedadScreen from '../Humedad/HUMEDAD'

function Menu(props){
  return(
    <View style ={s.container}>
      <View style ={s.bgContainer}>
        <TouchableOpacity>
          <View style={s.userContainer}>
            <Image style={s.userImagen2} source ={require('../../components/img/logo-brainapps.jpg')}/>
            
          </View>
          <View style ={s.userNombre}>
            <Text style={s.userTitulo}>Climate Cloud App</Text>
            <Text style={s.userSubTitulo}>Bienvenido</Text>
          </View>
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props}/>
    </View>
  )
}


const Drawer = createDrawerNavigator();

export default function INICIAL() {
  
  return (
    
      <Drawer.Navigator drawerContent={(props)=> <Menu {...props}/>} initialRouteName="Temperatura" >
        <Drawer.Screen name="Temperatura" component={TemperaturaScreen}  />
        <Drawer.Screen name="Calidad de aire" component={CalidadScreen} />
        <Drawer.Screen name="Humedad" component={HumedadScreen} />
      </Drawer.Navigator>
    
  );
}

