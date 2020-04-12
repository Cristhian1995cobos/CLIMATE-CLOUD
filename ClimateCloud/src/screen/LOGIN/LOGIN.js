//SCRIPT DEL MENU STACK (LLAMA A EL LOGIN: CONFIGURACIÓN Y LA APLICACION GENERAL: INICIAL)
import React, { Component } from 'react';
import { Text, TextInput, Button, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import INICIAL from '../INICIAL/INICIAL'
import s from '../../components/style'
import Configuracion from '../Configuracion/Configuracion2'


const Stack = createStackNavigator();

export default class LOGIN extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            new_data: 'holi'
        };

    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="LOGIN">
                    <Stack.Screen
                        name="LOGIN"
                        component={Configuracion}
                        options={{
                            headerShown: false,
                            //title: 'LOGIN',
                            headerStyle: {
                                backgroundColor: '#00b7ff',
                            },
                            headerTintColor: 'black',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                        }}
                    />
                    <Stack.Screen
                        name="INICIAL"
                        component={INICIAL}
                        options={{
                            //title: 'BACK TO LOGIN',
                            headerShown: false,
                            headerStyle: {
                                backgroundColor: '#00b7ff',
                            },
                            headerTintColor: 'black',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>


        );
    }
}






const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        textAlign: 'justify',
        padding: 10,
        fontSize: 18,
        height: 40,
    },
})

