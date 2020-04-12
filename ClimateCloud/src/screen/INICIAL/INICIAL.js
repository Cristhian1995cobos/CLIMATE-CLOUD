//SCRIPT DEL MENU DRAWER (LLAMA A LAS TRES OPCIONES: TMPERATURASCREEN, CALIDADSCREEN Y HUMEDADSCREEN)
import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import s from '../../components/style'

import {  Icon } from 'react-native-elements';

import TemperaturaScreen from '../Temperatura/TEMPERATURA'
import CalidadScreen from '../Calidad/CALIDAD'
import HumedadScreen from '../Humedad/HUMEDAD'
import AboutScreen from '../About/About'
import logoutscreen from '../LOGIN/Logout'

function Menu(props){
  return(
    <View style ={s.container}>
      <View style ={s.bgContainer}>
        
          <View style={s.userContainer}>
            <Image style={s.userImagen2} source ={require('../../components/img/logo-brainapps.jpg')}/>
            
          </View>
          <View style ={s.userNombre}>
            <Text style={s.userTitulo}>Climate Cloud App</Text>
            <Text style={s.userSubTitulo}>Welcome</Text>
          </View>

      </View>
      <DrawerItemList {...props}/>
    </View>
  )
}


const Drawer = createDrawerNavigator();

export default function INICIAL() {

  
  return (
    
    
      <Drawer.Navigator drawerContent={(props)=> <Menu {...props}/>} initialRouteName="Temperatura" 
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Temperature') {
            iconName = 'thermometer';
            
          } else if (route.name === 'Air quality') {
            iconName ='air';
          }else if (route.name === 'Humedity') {
            iconName ='drop';
          } else if (route.name === 'About us') {
            iconName ='info-with-circle';
          }else if (route.name === 'Log out') {
            iconName ='log-out';
          }

          // You can return any component that you like here!
          return <Icon  name= {iconName}
          type='entypo'
          size={20}
          color={color} />;
        },
      })}
       

        >
        <Drawer.Screen name="Temperature" component={TemperaturaScreen}   />
        <Drawer.Screen name="Air quality" component={CalidadScreen} />
        <Drawer.Screen name="Humedity" component={HumedadScreen} />
        <Drawer.Screen name="About us" component={AboutScreen} />
        <Drawer.Screen name="Log out" component={logoutscreen} />
      </Drawer.Navigator>
    
  );
}


const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 150 / 2,
  },
});