//EL VERDADERO LOGIN, LLAMA A INICIAL
import React, { Component } from 'react';
import { Button, AppRegistry, TextInput, View, Text, Alert ,TouchableOpacity,Image} from 'react-native';

import s from '../../components/style'
import init from 'react_native_mqtt';
import { AsyncStorage } from 'react-native';
//////////////////////////////////////////////////
import TemperaturaScreen from '../Temperatura/TEMPERATURA'
import variables from '../../components/variables'

//////////////////////////////////////
init({
    size: 10000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
    reconnect: true,
    sync: {
    }
});
export default class Configuracion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            host: 'ioticos.org',
            username: 'rJ6XFUSwA6ypIHM',
            password: 'aTuDefz29HIVrlr',
            roottopic: 'm4xvQf1qekvtaCH',
            int: false

        };
        this.handletextchangehost = this.handletextchangehost.bind(this);
        this.handletextchangeusername = this.handletextchangeusername.bind(this);
        this.handletextchangepassword = this.handletextchangepassword.bind(this);
        this.handletextchangeroottopic = this.handletextchangeroottopic.bind(this);
        // this.pressbutton = this.pressbutton.bind(this);
    }
    handletextchangehost(host) {
        this.setState({
            host
        })



    }
    handletextchangeusername(username) {
        this.setState({
            username
        })

    }
    handletextchangepassword(password) {
        this.setState({
            password
        })

    }
    handletextchangeroottopic(roottopic) {
        this.setState({
            roottopic
        })

    }
    onConnectionLost = (responseObject) => {
        if (responseObject.errorCode !== 0) {
            console.log("onConnectionLost:" + responseObject.errorMessage);


        }
    }
    onConnect = () => {
        const { client } = this.state;
        console.log("Conectado al broker")
        this.setState(
            { int: true }
        )
        console.log(this.state.int)
        Alert.alert('Conectado', 'Se ha conectado con exito a: \nHost:\t ' + this.state.host +
            '\nUsername:\t ' + this.state.username, [
            { text: 'OK' }
        ])


    }
    onerror = () => {
        //   console.log("falle");
        this.setState(
            { int: false}
        )
        console.log(this.state.int)
        Alert.alert('Lo sentimos: No conectado', 'Host, Username o Password ingresados incorrectamente', [
            { text: 'OK' }
        ])
    }
    pressbutton = () => {
        variables.host = this.state.host
        variables.username = this.state.username
        variables.password = this.state.password
        variables.roottopic = this.state.roottopic

        console.log('host:' + this.state.host)
        console.log('username:' + this.state.username)
        console.log('password:' + this.state.password)
        console.log('roottopic:' + this.state.roottopic)

        const client = new Paho.MQTT.Client(this.state.host, Number(8093), 'CLIMATEPRUEBA');
        client.onConnectionLost = this.onConnectionLost;

        client.connect({ userName: this.state.username, password: this.state.password, keepAliveInterval: 60, onSuccess: this.onConnect, onFailure: this.onerror, useSSL: false });


    }

    render() {
if(this.state.int!=true){
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
            <TouchableOpacity>
                <View>
                    <Image style={s.userImagenLOGIN} source={require('../../components/img/logo-brainapps.jpg')} />


                    <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 30,
                        top: 10
                    }}>LOGIN</Text>
                </View>

            </TouchableOpacity>
            <View style={{ top: 10 }}>
                <Text style={s.userSubTitulo2}>Host:</Text>
            </View>
            <TextInput placeholder='www.example.com / org'
                value={this.state.host}
                style={{ height: 40, backgroundColor: 'white', borderWidth: 3, borderColor: '#00b7ff', top: 10 }}
                onChangeText={this.handletextchangehost}

            />
            <View style={{ top: 10 }}>
                <Text style={s.userSubTitulo2}>Usuario:</Text>
            </View>
            <TextInput placeholder='Username'
                value={this.state.username}
                style={{ height: 40, backgroundColor: 'white', borderWidth: 3, borderColor: '#00b7ff', top: 10 }}
                onChangeText={this.handletextchangeusername}
            />
            <View style={{ top: 10 }}>
                <Text style={s.userSubTitulo2}>Contraseña:</Text>
            </View>
            <TextInput placeholder='Password'
                bolGone={true}
                value={this.state.password}
                secureTextEntry={true}
                style={{ height: 40, backgroundColor: 'white', borderWidth: 3, borderColor: '#00b7ff', top: 10 }}
                onChangeText={this.handletextchangepassword}
            />
            <View style={{ top: 10 }}>
                <Text style={s.userSubTitulo2}>Tema principal:</Text>
            </View>
            <TextInput placeholder='Root topic'
                value={this.state.roottopic}
                style={{ height: 40, backgroundColor: 'white', borderWidth: 3, borderColor: '#00b7ff', top: 10 }}
                onChangeText={this.handletextchangeroottopic}
            />
            <View style={{ top: 20 }}>
                <Button
                    title="CONECTAR"
                    color='#00b7ff'
                    onPress={this.pressbutton}

                />

            </View>
            
        </View >
    );
}else{
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
                <TouchableOpacity>
                    <View>
                        <Image style={s.userImagenLOGIN} source={require('../../components/img/logo-brainapps.jpg')} />


                        <Text style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 30,
                            top: 10
                        }}>LOGIN</Text>
                    </View>

                </TouchableOpacity>
                <View style={{ top: 10 }}>
                    <Text style={s.userSubTitulo2}>Host:</Text>
                </View>
                <TextInput placeholder='www.example.com / org'
                    value={this.state.host}
                    style={{ height: 40, backgroundColor: 'white', borderWidth: 3, borderColor: '#00b7ff', top: 10 }}
                    onChangeText={this.handletextchangehost}

                />
                <View style={{ top: 10 }}>
                    <Text style={s.userSubTitulo2}>Usuario:</Text>
                </View>
                <TextInput placeholder='Username'
                    value={this.state.username}
                    style={{ height: 40, backgroundColor: 'white', borderWidth: 3, borderColor: '#00b7ff', top: 10 }}
                    onChangeText={this.handletextchangeusername}
                />
                <View style={{ top: 10 }}>
                    <Text style={s.userSubTitulo2}>Contraseña:</Text>
                </View>
                <TextInput placeholder='Password'
                    bolGone={true}
                    value={this.state.password}
                    secureTextEntry={true}
                    style={{ height: 40, backgroundColor: 'white', borderWidth: 3, borderColor: '#00b7ff', top: 10 }}
                    onChangeText={this.handletextchangepassword}
                />
                <View style={{ top: 10 }}>
                <Text style={s.userSubTitulo2}>Tema principal:</Text>
            </View>
                 <TextInput placeholder='Root topic'
                value={this.state.roottopic}
                style={{ height: 40, backgroundColor: 'white', borderWidth: 3, borderColor: '#00b7ff', top: 10 }}
                onChangeText={this.handletextchangeroottopic}
            />
                <View style={{ top: 20 }}>
                    <Button
                        title="CONECTAR"
                        color='#00b7ff'
                        onPress={this.pressbutton}

                    />

                </View>
                <View style={{ top: 30 }}>
                    <Button
                        title="EMPEZAR"

                        onPress={() => this.props.navigation.navigate('INICIAL')}
                    />
                </View>
            </View >
        );
                    }
    }
}