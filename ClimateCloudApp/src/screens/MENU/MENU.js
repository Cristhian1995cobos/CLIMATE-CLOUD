import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import DrawerNavigator from 'react-navigation';

const TemperaturaStack = StackNavigator({
    Temperatura: {
        screen: TEMPERATURASCREEN
    }
});

const HumedadStack = StackNavigator({
    Humedad: {
        screen: HUMEDADSCREEN
    }
});

const CalidadStack = StackNavigator({
    Calidad: {
        screen: CALIDADSCREEN
    }
});

const MENU = DrawerNavigator({
    TemperaturaDrawer: {
        screen: TemperaturaStack
    },
    HumedadDrawer: {
        screen: HumedadStack
    },
    CalidadDrawer: {
        screen: CalidadStack
    }
});