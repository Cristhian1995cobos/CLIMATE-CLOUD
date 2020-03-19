import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function GraficasScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Calidad Grafica!</Text>
      </View>
    );
  }
  
  function DatosScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Calidad Datos!</Text>
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator();

export default function CalidadScreen({ navigation }) {
    return (
        
        <Tab.Navigator>
          <Tab.Screen name="Grafica" component={GraficasScreen} />
          <Tab.Screen name="Datos" component={DatosScreen} />
        </Tab.Navigator>
      
    );
  }


