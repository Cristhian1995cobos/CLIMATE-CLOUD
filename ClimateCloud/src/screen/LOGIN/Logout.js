//SCRIPT DEL MENU DRAWER (LLAMA A LAS TRES OPCIONES: TMPERATURASCREEN, CALIDADSCREEN Y HUMEDADSCREEN)
import React, { Component } from 'react';

import { AppRegistry, TextInput, View, Text, Alert, TouchableOpacity, Image ,ScrollView} from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

export default class Logout extends Component {



    constructor(props) {
        super(props);
       
    }
  

 
     componentDidMount= () => {
        this.props.navigation.navigate('LOGIN')
    }  

    

    render() {
      //  this.props.navigation.goBack()
        console.log('holas')
     
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white'}}></View>
        )
    }
}