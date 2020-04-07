import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Text, Alert, TouchableOpacity, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import s from '../../components/style'

export default class Configuracion extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (

            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'column', alignItems: 'flex-start', backgroundColor: 'white' }}>
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

                <View style={{ top: 100, alignItems: 'center' }}>
                    <Image style={s.userImagenLOGIN} source={require('../../components/img/logo-brainapps.jpg')} />
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 20,
                        top: 10
                    }}>About us </Text>
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 10,
                        top: 10
                    }}>Version: v.1.0</Text>
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 10,
                        top: 10
                    }}>Designed by: Cristhian Cobos</Text>
                     <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 10,
                        top: 10
                    }}>Email: cristhian1995cobos@hotmail.com</Text>
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 10,
                        top: 10
                    }}>Quito - Ecuador</Text>
                </View>



            </View>

        );
    }



}