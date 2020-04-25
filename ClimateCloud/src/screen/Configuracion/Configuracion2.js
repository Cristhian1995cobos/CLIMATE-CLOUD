//EL VERDADERO LOGIN, LLAMA A INICIAL
import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Text, Alert, TouchableOpacity, Image ,ScrollView, TouchableHighlightBase} from 'react-native';
import { Button, Icon } from 'react-native-elements';

import s from '../../components/style'
import init from 'react_native_mqtt';
import { AsyncStorage } from 'react-native';
//////////////////////////////////////////////////
import TemperaturaScreen from '../Temperatura/TEMPERATURA'
import variables from '../../components/variables'

import {connect} from 'react-redux';
import {actions} from '../../store'

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
 class Configuracion extends Component {



    constructor(props) {
        super(props);
        this.state = {
            host: variables.host,
            username: variables.username,
            password: variables.password,
            roottopic: variables.roottopic,
            int: false,
            login: false,
            act:false

        };
        this.handletextchangehost = this.handletextchangehost.bind(this);
        this.handletextchangeusername = this.handletextchangeusername.bind(this);
        this.handletextchangepassword = this.handletextchangepassword.bind(this);
        this.handletextchangeroottopic = this.handletextchangeroottopic.bind(this);
        // this.pressbutton = this.pressbutton.bind(this);
        console.log("primero        "+this.state.props)
    }

   
  componentDidMount= () => {
    const { changehost,changeusername,changepassword,changeroottopic, login} = this.props;
    changehost(this.state.host);
    changeusername(this.state.username)
    changepassword(this.state.password)
    changeroottopic(this.state.roottopic)

   
    console.log(this.props.state)

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
        Alert.alert('Connected', 'You have successfully connected to: \nHost:\t ' + this.state.host +
            '\nUsername:\t ' + this.state.username+'\n',  [
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            { text: 'Get in', onPress: this.pressin  },
        ])


    }
    onerror = () => {
        //   console.log("falle");
        this.setState(
            { int: false }
        )
        console.log(this.state.int)
        Alert.alert('Sorry: Not connected', 'Host, Username o Password incorrectly entered', [
            { text: 'Try again', onPress: this.presscancel , style: 'cancel' },
        ])
    }
 

    presssave = () => {
     
        
        const client = new Paho.MQTT.Client(this.state.host, Number(8093), 'CLIMATEPRUEBA');
        client.onConnectionLost = this.onConnectionLost;

        client.connect({ timeout: 5,userName: this.state.username, password: this.state.password, keepAliveInterval: 60, onSuccess: this.onConnect, onFailure: this.onerror, useSSL: false });
       
             
    }

    pressreset = () => {
        Alert.alert('Factory reset', 'Are you sure?:',  [
            { text: 'Yes', onPress: this.presssure },
            { text: 'NO', onPress: () => console.log('Cancel Pressed'), style: 'cancel'  },
            
        ])
    }
    
    presssure = () => {
        const { changehost,changeusername,changepassword,changeroottopic, login} = this.props;
        console.log('resetee')
        changehost('ioticos.org')
        changeusername('rJ6XFUSwA6ypIHM')
        changepassword('aTuDefz29HIVrlr')
        changeroottopic('m4xvQf1qekvtaCH')
        this.setState(
            { act: !this.state.act}
        )

        this.setState(
            { 
            host: this.props.state.host,
            username: this.props.state.username,
            password: this.props.state.password,
            roottopic: this.props.state.roottopic, }
        )
      
    }

    presssettings = () => {


        this.setState(
            { login: true }
        )

    }
    presscancel = () => {
        
        const { changehost,changeusername,changepassword,changeroottopic, login} = this.props;
        changehost(this.state.host)
        changeusername(this.state.username)
        changepassword(this.state.password)
        changeroottopic(this.state.roottopic)
        
    }


    pressin = () => {
        
            this.setState(
                { int: false }
            )
            this.setState(
                { login: false }
            )
      
        console.log('aplaste2 ' + this.state.int)
        this.props.navigation.navigate('INICIAL')
        const { changehost,changeusername,changepassword,changeroottopic, login} = this.props;
   
        changehost(this.state.host)
        changeusername(this.state.username)
        changepassword(this.state.password)
        changeroottopic(this.state.roottopic)

    }

    render() {
        console.log('propiedades del com' , this.state);
        if (this.state.login != true) {
           
            return (
               
                <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
                  
                        <View>
                            <Image style={s.userImagenLOGIN} source={require('../../components/img/logo-brainapps.jpg')} />


                            <Text style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 30,
                                top: 10
                            }}>LOGIN</Text>
                        </View>

                  
                    <Button
                        type="clear"
                        title="Settings"
                        icon={
                            <Icon
                                name='gear'
                                type='evilicon'
                                size={60}
                                color='#00b7ff'
                            />
                        }

                        onPress={this.presssettings}
                    />
                    <View style={{ top: 70 }}>
                        <Button
                            title="CONECT"
                            color='white'
                            onPress={this.presssave}
                        />


                    </View>


                </View>
               
            )
         
        } else {
           
            return (
                <ScrollView>
                <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
                  
                        <View>
                            <Image style={s.userImagenLOGIN} source={require('../../components/img/logo-brainapps.jpg')} />


                            <Text style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 30,
                                top: 10
                            }}>LOGIN</Text>
                        </View>

                   
                    <View style={{ top: 10 }}>
                        <Text style={s.userSubTitulo2}>Host:</Text>
                    </View>
                    <TextInput placeholder='www.example.com / org'
                        value={this.state.host}
                        style={{ height: 40,width:200, backgroundColor: 'white', borderWidth: 3, borderColor: '#00b7ff', top: 10 }}
                        onChangeText={this.handletextchangehost}

                    />
                    <View style={{ top: 10 }}>
                        <Text style={s.userSubTitulo2}>Username:</Text>
                    </View>
                    <TextInput placeholder='Username'
                        value={this.state.username}
                        style={{ height: 40,width:200, backgroundColor: 'white', borderWidth: 3, borderColor: '#00b7ff', top: 10 }}
                        onChangeText={this.handletextchangeusername}
                    />
                    <View style={{ top: 10 }}>
                        <Text style={s.userSubTitulo2}>Password:</Text>
                    </View>
                    <TextInput placeholder='Password'
                        bolGone={true}
                        value={this.state.password}
                        secureTextEntry={true}
                        style={{ height: 40,width:200, backgroundColor: 'white', borderWidth: 3, borderColor: '#00b7ff', top: 10 }}
                        onChangeText={this.handletextchangepassword}
                    />
                    <View style={{ top: 10 }}>
                        <Text style={s.userSubTitulo2}>Root topic:</Text>
                    </View>
                    <TextInput placeholder='Root topic'
                        value={this.state.roottopic}
                        style={{ height: 40,width:200, backgroundColor: 'white', borderWidth: 3, borderColor: '#00b7ff', top: 10 }}
                        onChangeText={this.handletextchangeroottopic}
                    />
                     <View style={{ top: 20 }}>
                        <Button
                            title="Save and Connect"
                            color='white'
                            onPress={this.presssave}
                        />
                         <Text style={{}}></Text>
                         </View>
                    <View style={{ top: 20 }}>
                        <Button
                            title="Reset"
                            color='white'
                            onPress={this.pressreset}
                        />


                    </View>
                    <View style={{ color:'white',height:135}}>
                    <Text style={{}}></Text>
                    </View>
                   

                </View >
                </ScrollView>
            );
        }
        //      }
    }
}
const mapDispatchToProps = dispatch =>({
    login: (username,password)=> dispatch(actions.user.login(username, password)),
    changehost: (new_state)=> dispatch(actions.user.changehost(new_state)),
    changeusername: (new_state)=> dispatch(actions.user.changeusername(new_state)),
    changepassword: (new_state)=> dispatch(actions.user.changepassword(new_state)),
    changeroottopic: (new_state)=> dispatch(actions.user.changeroottopic(new_state)),
});
const mapStateToProps = state => ({
    state: state,
})

export default connect(mapStateToProps,mapDispatchToProps)(Configuracion)