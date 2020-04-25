import React from 'react'
import { AreaChart, YAxis, XAxis, Grid } from 'react-native-svg-charts'
import { Circle } from 'react-native-svg'
import * as shape from 'd3-shape'

import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Toast, Alert, ScrollView } from 'react-native';
import { Button, Icon } from 'react-native-elements';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import s from '../../components/style'
////////////////////////////////////////////////
import init from 'react_native_mqtt';
import { AsyncStorage } from 'react-native';


import {connect} from 'react-redux';
//variables
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

        const axesSvg = { fontSize: 15, fill: 'rgb(134, 65, 244)' };
        const verticalContentInset = { top: 20, bottom: 20 }
        const xAxisHeight = 30


        const Decorator = ({ x, y, data }) => {
            return data.map((value, index) => (
                <Circle
                    key={index}
                    cx={x(index)}
                    cy={y(value)}
                    r={4}
                    stroke={'rgb(134, 65, 244)'}
                    fill={'rgb(134, 65, 244)'}
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
                        <Text style={s.userSubTitulo2}>Air quality</Text>
                    </View>
                    <View style={{ top: -20, alignItems: 'center' }}>
                        <Image style={s.userImageniconos} source={require('../../components/img/oxigeno.png')} />
                        <Text style={s.userSubTitulo2}>{numbers[0]} ug/m3 </Text>
                    </View>

                    <View style={{ top: -30, left: 1, height: 425, width: 410, padding: 20, flexDirection: 'row', backgroundColor: 'white', borderRadius: 0, alignItems: 'center' }}>


                        <YAxis
                            data={data}
                            style={{ marginBottom: xAxisHeight }}
                            contentInset={verticalContentInset}
                            svg={axesSvg}
                            //  numberOfTicks={ 10 }
                            formatLabel={value => `${value} ug/m3`}
                        />
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <AreaChart
                                style={{ flex: 1 }}
                                data={data}
                                contentInset={verticalContentInset}
                                svg={{ stroke: 'rgb(134, 65, 244)', fill: 'rgba(134, 65, 244, 0.2)' }}
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
                    <Text style={s.userSubTitulo2}>Air quality</Text>
                </View>
                <View style={{ top: -20, alignItems: 'center' }}>
                    <Image style={s.userImageniconos} source={require('../../components/img/oxigeno.png')} />
                </View>

                <Text style={s.userSubTitulo3}>                                   Data                       Hour         </Text>
                <FlatList
                    data={[
                        { key: 'Data 1:               ' + numbers[0] + ' ug/m3                 ' + hora[0] },
                        { key: 'Data 2:               ' + numbers[1] + ' ug/m3                 ' + hora[1] },
                        { key: 'Data 3:               ' + numbers[2] + ' ug/m3                 ' + hora[2] },
                        { key: 'Data 4:               ' + numbers[3] + ' ug/m3                 ' + hora[3] },
                        { key: 'Data 5:               ' + numbers[4] + ' ug/m3                 ' + hora[4] },
                        { key: 'Data 6:               ' + numbers[5] + ' ug/m3                 ' + hora[5] },
                        { key: 'Data 7:               ' + numbers[6] + ' ug/m3                 ' + hora[6] },
                        { key: 'Data 8:               ' + numbers[7] + ' ug/m3                 ' + hora[7] },
                        { key: 'Data 9:               ' + numbers[8] + ' ug/m3                 ' + hora[8] },
                        { key: 'Data10:               ' + numbers[9] + ' ug/m3                 ' + hora[9] },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                />
            
</ScrollView >
        );


    }
}

//tab navigator
const Tab = createBottomTabNavigator();


//clase> screen padre
 class CalidadScreen extends React.Component {

    static navigationOptions = {
        header: null,
    };


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    constructor(props) {
        super(props);

        const client = new Paho.MQTT.Client(this.props.state.host, Number(8093), 'CLIMATECAL');
        client.onConnectionLost = this.onConnectionLost;
        client.onMessageArrived = this.onMessageArrived;


        client.connect({ userName: this.props.state.username, password: this.props.state.password, keepAliveInterval: 60, onSuccess: this.onConnect, onFailure: this.onerror, useSSL: false });
        this.state = {
            host: '',
            temp: '...',
            client,
            loading: true,
            showError: false
        };

    };




    onConnectionLost = (responseObject) => {
        if (responseObject.errorCode !== 0) {
            console.log("onConnectionLost:" + responseObject.errorMessage);


        }
    }

    onConnect = () => {
        const { client } = this.state;
        client.subscribe(this.props.state.roottopic + '/calidadaire')
        console.log("Conectado al broker")

    }
    componentWillUnmount = () => {
        const { client } = this.state;
        client.unsubscribe(this.props.state.roottopic + '/calidadaire')
        console.log('unsuscribe')
    }


    onMessageArrived = (message) => {
        // console.log(message.payloadString)
        tabla2 = message.payloadString
        tabla = Number(tabla2).toFixed(2);
        while (i > 0) {
            numbers[i] = numbers[i - 1]
            hora[i] = hora[i - 1]
            data[i] = data[i - 1]
            i = i - 1

        }
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        i = 9
        numbers[0] = tabla
        data[0] = Number(tabla)
        hora[0] = hours + ':' + min + ':' + sec


    }
    ////////////////////////////////////////////


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
                        <Text style={s.userSubTitulo2}>Air quality</Text>
                    </View>
                    <View style={s.userContainer}>
                        <Image style={s.userImageniconos} source={require('../../components/img/oxigeno.png')} />

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
                                iconName = 'bars';
                                console.log('entremenu2')
                            }

                            // You can return any component that you like here!
                            return <Icon name={iconName}
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
export default connect(mapStateToProps,null)(CalidadScreen)