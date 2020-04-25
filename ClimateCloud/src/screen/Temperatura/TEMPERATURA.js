import React from 'react'
import { AreaChart, YAxis, XAxis, Grid } from 'react-native-svg-charts'
import { Circle } from 'react-native-svg'
import * as shape from 'd3-shape'

import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Toast, Alert } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import s from '../../components/style'
////////////////////////////////////////////////
import init from 'react_native_mqtt';
import { AsyncStorage } from 'react-native';
////////////////////////////////////////////////


import { ScrollView } from 'react-native-gesture-handler';
import {connect} from 'react-redux';

//variables
let client
let tabla
let tabla2
let numbers = ['        Wating Data', '        Wating Data', '        Wating Data', '        Wating Data', '        Wating Data', '        Wating Data', '        Wating Data', '        Wating Data', '        Wating Data', '        Wating Data'];
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
            <ScrollView>
            <View>
                <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                    <Button
                        type="clear"
                        icon={
                            <Icon
                                name='navicon'
                                type='evilicon'
                                size={25}
                                color='#00b7ff'
                            />

                        }
                        onPress={() => this.props.navigation.openDrawer()}

                    />

                </View>
                <View style={{ top: -10 }}>
                    <Text style={s.userTitulo2}>Climate Cloud App</Text>
                </View>

                <View style={styles.container}>
                    <Text style={s.userSubTitulo2}>Temperature</Text>
                </View>
                <View style={{ top: -20, alignItems: 'center' }}>
                    <Image style={s.userImageniconos} source={require('../../components/img/caliente.png')} />
                    <Text style={s.userSubTitulo2}>{numbers[0]} °C </Text>
                </View>

                <View style={{ top: -30, left: 1, height: 425, width: 410, padding: 20, flexDirection: 'row', backgroundColor: 'white', borderRadius: 0, alignItems:'center'}}>
                    <YAxis
                        data={data}
                        style={{ marginBottom: xAxisHeight }}
                        contentInset={verticalContentInset}
                        svg={axesSvg}
                        //  numberOfTicks={ 10 }
                        formatLabel={value => `${value}ºC`}
                    />
                    <View style={{ flex: 1, marginLeft: 10}}>
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


            </View>
            </ScrollView>


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

            <ScrollView>
            <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
            <Button
                        type="clear"
                        icon={
                            <Icon
                                name='navicon'
                                type='evilicon'
                                size={25}
                                color='#00b7ff'
                            />

                        }
                        onPress={() => this.props.navigation.openDrawer()}

                    />

            </View>
             <View style={{ top: -10 }}>
                    <Text style={s.userTitulo2}>Climate Cloud App</Text>
                </View>

                <View style={styles.container}>
                    <Text style={s.userSubTitulo2}>Temperature</Text>
                </View>
                <View style={{ top: -20, alignItems: 'center' }}>
                <Image style={s.userImageniconos} source={require('../../components/img/caliente.png')} />
            </View>
           
                <Text style={s.userSubTitulo3}>                                   Data                       Hour         </Text>
                <FlatList
                    data={[
                        { key: 'Data 1:                     ' + numbers[0] + '°C                    ' + hora[0] },
                        { key: 'Data 2:                     ' + numbers[1] + '°C                    ' + hora[1] },
                        { key: 'Data 3:                     ' + numbers[2] + '°C                    ' + hora[2] },
                        { key: 'Data 4:                     ' + numbers[3] + '°C                    ' + hora[3] },
                        { key: 'Data 5:                     ' + numbers[4] + '°C                    ' + hora[4] },
                        { key: 'Data 6:                     ' + numbers[5] + '°C                    ' + hora[5] },
                        { key: 'Data 7:                     ' + numbers[6] + '°C                    ' + hora[6] },
                        { key: 'Data 8:                     ' + numbers[7] + '°C                    ' + hora[7] },
                        { key: 'Data 9:                     ' + numbers[8] + '°C                    ' + hora[8] },
                        { key: 'Data10:                    ' + numbers[9] + '°C                     ' + hora[9] },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                />
            </ScrollView>

        );


    }
}

//tab navigator
const Tab = createBottomTabNavigator();

//clase> screen padre
 class TemperaturaScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };
    
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    constructor(props) {
        super(props);
        client = new Paho.MQTT.Client(this.props.state.host, Number(8093), 'CLIMATETEMP');
        client.onConnectionLost = this.onConnectionLost;
        client.onMessageArrived = this.onMessageArrived;

        client.connect({ userName: this.props.state.username, password: this.props.state.password, keepAliveInterval: 60, onSuccess: this.onConnect, onFailure: this.onerror, useSSL: false });
   

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
        client.subscribe(this.props.state.roottopic + '/temperatura')
        console.log("Conectado al broker")
        console.log(this.props)

    }
    componentWillUnmount = () => {
        const { client } = this.state;
        client.unsubscribe(this.props.state.roottopic + '/temperatura')
        console.log('unsuscribe')
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
                Alert.alert('Not connected', 'Back to LOGIN'),
                < TouchableOpacity >
                    <View style={styles.container}>
                        <Text style={s.userTitulo2}>Climate Cloud App</Text>
                    </View>

                    <View style={styles.container}>
                        <Text style={s.userSubTitulo2}>Temperature</Text>
                    </View>
                    <View style={s.userContainer}>
                        <Image style={s.userImageniconos} source={require('../../components/img/caliente.png')} />

                    </View>

                </TouchableOpacity >

            )

        } else {

            return (


                <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
          
                      if (route.name === 'Graphics') {
                        iconName = 'areachart';
                        console.log('entremenu')
                        
                      } else if (route.name === 'Data') {
                        iconName ='bars';
                        console.log('entremenu2')
                      }
          
                      // You can return any component that you like here!
                      return <Icon  name= {iconName}
                      type='antdesign'
                      size={30}
                      color={color} />;
                    },
                  })}
                    tabBarOptions={{
                        activeTintColor: '#00b7ff',
                        inactiveTintColor: '#cbd4e0',
                        labelPosition: 'below-icon',
                        
                        showIcon: true,
                        labelStyle: {

                            fontSize: 17,
                        },


                    }}
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                >


                    <Tab.Screen name="Graphics" component={GraficasScreen} />
                    <Tab.Screen name="Data" component={DatosScreen} />

                </Tab.Navigator >


            );

        }
    }
}

//estilos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        top: -16,
    },
    item: {
        textAlign: 'justify',
        padding: 10,
        fontSize: 18,
        height: 40,
       
    },
})

const mapStateToProps = state => ({
    state: state,
})
export default connect(mapStateToProps,null)(TemperaturaScreen)