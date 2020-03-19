import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import s from '../../components/style'

function GraficasScreen() {
    return (
        <View style={styles.container}>
            <Text style={s.userTitulo}>Climate Cloud App</Text>
            <Text style={s.userSubTitulo2}>Temperatura</Text>
        </View>
        
    );
}

function DatosScreen() {
    return (
        <View style={styles.container}>
            <Text style={s.userTitulo}>Climate Cloud App</Text>
            <Text style={s.userSubTitulo2}>Temperatura</Text>
            <FlatList
                data={[
                    { key: 'Data1' },
                    { key: 'Data2' },
                    { key: 'Data3' },
                    { key: 'Data4' },
                    { key: 'Data5' },
                    { key: 'Data6' },
                    { key: 'Data7' },
                    { key: 'Data8' },
                    { key: 'Data9' },
                    { key: 'Data10' },
                ]}
                renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
            />
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function TemperaturaScreen({ navigation }) {
    return (

        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen  name="Grafica" component={GraficasScreen} />
            <Tab.Screen  name="Datos" component={DatosScreen} />
        </Tab.Navigator>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

