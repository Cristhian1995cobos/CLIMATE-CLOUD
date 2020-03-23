import React, { Component } from 'react';
import { Text, TextInput, Button, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import INICIAL from '../INICIAL/INICIAL'
import s from '../../components/style'


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
                        component={HomeScreen}
                        options={{
                            title: 'HOME',
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
                            title: 'REVISION DE DATOS',
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




function HomeScreen({ navigation }) {

    return (



        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white'}}>

            <TouchableOpacity>
                <View>
                    <Image style={s.userImagenLOGIN} source={require('../../components/img/logo-brainapps.jpg')} />
                   
               
                <Text style={{textAlign: 'center',
        fontWeight:'bold',
        fontSize: 45,
        top: 50}}>BIENVENIDO</Text>
                </View>
               
            </TouchableOpacity>
            <View style={{textAlign: 'center',
        fontWeight:'bold',
        
        top: 60}}>
            <Button
                title="EMPEZAR"
                
                onPress={() => navigation.navigate('INICIAL')}
            />
            </View>
            

        </View>

    );

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

