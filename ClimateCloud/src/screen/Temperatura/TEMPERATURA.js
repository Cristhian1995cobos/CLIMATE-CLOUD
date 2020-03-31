import React from 'react'
import { AreaChart, YAxis, XAxis, Grid } from 'react-native-svg-charts'
import { Circle } from 'react-native-svg'
import * as shape from 'd3-shape'

import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Toast, Alert } from 'react-native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import s from '../../components/style'
////////////////////////////////////////////////
import init from 'react_native_mqtt';
import { AsyncStorage } from 'react-native';
////////////////////////////////////////////////
import variables from '../../components/variables'
import { call } from 'react-native-reanimated';
//variables
let client
let tabla
let tabla2
let numbers = ['        Esperando datos', '        Esperando datos', '        Esperando datos', '        Esperando datos', '        Esperando datos', '        Esperando datos', '        Esperando datos', '        Esperando datos', '        Esperando datos', '        Esperando datos'];
let hora = ['', '', '', '', '', '', '', '', '', ''];
let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let i
i = 9
init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    reconnect: true,
    sync: {
    }
});
//clases> screens hijos
class GraficasScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            new_data: false
        };

    }

    componentDidMount() {
        // Toggle the state every second
        setInterval(this.timerFunction, 1000);
    }

    timerFunction = () => {

        this.setState(
            { new_data: !this.state.new_data }
        )
    }



    render() {

        const axesSvg = { fontSize: 15, fill: 'rgba(255, 69, 0, 1)' };
        const verticalContentInset = { top: 10, bottom: 10 }
        const xAxisHeight = 30


        const Decorator = ({ x, y, data }) => {
            return data.map((value, index) => (
                <Circle
                    key={index}
                    cx={x(index)}
                    cy={y(value)}
                    r={4}
                    stroke={'rgba(255, 69, 0, 1)'}
                    fill={'rgba(255, 69, 0, 1)'}
                />
            ))
        }


        return (


            <TouchableOpacity>
                <View style={styles.container}>
                    <Text style={s.userTitulo2}>Climate Cloud App</Text>
                </View>

                <View style={styles.container}>
                    <Text style={s.userSubTitulo2}>Temperatura</Text>
                </View>
                <View style={s.userContainer}>
                    <Image style={s.userImageniconos} source={require('../../components/img/caliente.png')} />

                </View>

                <View style={{ left: 1, height: 425, width: 410, padding: 20, flexDirection: 'row', backgroundColor: 'black', borderRadius: 20 }}>
                    <YAxis
                        data={data}
                        style={{ marginBottom: xAxisHeight }}
                        contentInset={verticalContentInset}
                        svg={axesSvg}
                        //  numberOfTicks={ 10 }
                        formatLabel={value => `${value}ºC`}
                    />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <AreaChart
                            style={{ flex: 1 }}
                            data={data}
                            contentInset={verticalContentInset}
                            svg={{ stroke: 'rgba(255, 69, 0, 1)', fill: 'rgba(255, 69, 0, 0.2)' }}
                            curve={shape.curveNatural}

                        >
                            <Grid />
                            <Decorator />
                        </AreaChart>


                        <XAxis
                            style={{ marginHorizontal: -10, height: xAxisHeight }}
                            data={data}
                            formatLabel={(value, index) => index + 1}
                            contentInset={{ left: 10, right: 10 }}
                            svg={axesSvg}
                        />
                    </View>
                </View>



            </TouchableOpacity>

        );


    }
}



class DatosScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            new_data: false
        };

    }

    componentDidMount() {
        // Toggle the state every second
        setInterval(this.timerFunction, 1000);
    }

    timerFunction = () => {

        this.setState(
            { new_data: !this.state.new_data }
        )
    }

    render() {


        return (


            <TouchableOpacity>
                <View style={styles.container}>
                    <Text style={s.userTitulo2}>Climate Cloud App</Text>
                </View>

                <View style={styles.container}>
                    <Text style={s.userSubTitulo2}>Temperatura </Text>
                </View>
                <View style={s.userContainer}>
                    <Image style={s.userImageniconos} source={require('../../components/img/caliente.png')} />

                </View>
                <Text style={s.userSubTitulo3}> Dato                               Hora             </Text>
                <FlatList
                    data={[
                        { key: 'Dato 1:                     ' + numbers[0] + '°C                    ' + hora[0] },
                        { key: 'Dato 2:                     ' + numbers[1] + '°C                    ' + hora[1] },
                        { key: 'Dato 3:                     ' + numbers[2] + '°C                    ' + hora[2] },
                        { key: 'Dato 4:                     ' + numbers[3] + '°C                    ' + hora[3] },
                        { key: 'Dato 5:                     ' + numbers[4] + '°C                    ' + hora[4] },
                        { key: 'Dato 6:                     ' + numbers[5] + '°C                    ' + hora[5] },
                        { key: 'Dato 7:                     ' + numbers[6] + '°C                    ' + hora[6] },
                        { key: 'Dato 8:                     ' + numbers[7] + '°C                    ' + hora[7] },
                        { key: 'Dato 9:                     ' + numbers[8] + '°C                    ' + hora[8] },
                        { key: 'Dato10:                    ' + numbers[9] + '°C                     ' + hora[9] },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                />
            </TouchableOpacity>

        );


    }
}

//tab navigator
const Tab = createBottomTabNavigator();

//clase> screen padre
export default class TemperaturaScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    constructor(props) {
        super(props);
        client = new Paho.MQTT.Client(variables.host, Number(8093), 'CLIMATETEMP');
        client.onConnectionLost = this.onConnectionLost;
        client.onMessageArrived = this.onMessageArrived;

        client.connect({ userName: variables.username, password: variables.password, keepAliveInterval: 60, onSuccess: this.onConnect, onFailure: this.onerror, useSSL: false });


        this.state = {
            loading: true,
            client,
            new_data: false


        };

    };

    onConnectionLost = (responseObject) => {
        if (responseObject.errorCode !== 0) {
            console.log("onConnectionLost2:" + responseObject.errorMessage);


        }
    }

    onConnect = () => {
        const { client } = this.state;
        client.subscribe(variables.roottopic+'/temperatura')
        console.log("Conectado al broker")

    }
   
 
    onMessageArrived = (message) => {
        console.log(message.payloadString)
        tabla2 = message.payloadString
        tabla = Number(tabla2).toFixed(2);
        i = 9
        while (i > 0) {
            numbers[i] = numbers[i - 1]
            hora[i] = hora[i - 1]
            data[i] = data[i - 1]
            i = i - 1

        }
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds

        numbers[0] = tabla
        data[0] = Number(tabla)
        hora[0] = hours + ':' + min + ':' + sec


    }

    onerror = () => {
        console.log("falle");
        this.setState(
            { loading: false }
        )

    }

     


    render() {
        /////////////////////////////////////
        if (this.state.loading != true) {
            return (
                Alert.alert('No estas conetado', 'Vuelve a al LOGIN'),
                < TouchableOpacity >
                <View style={styles.container}>
                    <Text style={s.userTitulo2}>Climate Cloud App</Text>
                </View>

                <View style={styles.container}>
                    <Text style={s.userSubTitulo2}>Temperatura</Text>
                </View>
                <View style={s.userContainer}>
                    <Image style={s.userImageniconos} source={require('../../components/img/caliente.png')} />

                </View>
               
            </TouchableOpacity >
               
            )

        } else {
   
            return (


                <Tab.Navigator
                    tabBarOptions={{
                        activeTintColor: 'black',
                        inactiveTintColor: 'black',
                        labelPosition: 'below-icon',
                        inactiveBackgroundColor: '#cbd4e0',
                        activeBackgroundColor: '#00b7ff',
                        showIcon: false,
                        labelStyle: {

                            fontSize: 20,
                        },


                    }}
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                >


                    <Tab.Screen name="Grafica" component={GraficasScreen} />
                    <Tab.Screen name="Datos" component={DatosScreen} />

                </Tab.Navigator >


            );
        
                }
    }
}

//estilos
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

