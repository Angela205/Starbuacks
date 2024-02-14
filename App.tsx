/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './pantallas/inicio'; 
import Usuario from './pantallas/usuario';
import Solicitud from './pantallas/solicitud';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false // Ocultar el encabezado en todas las pantallas
        }}
      >
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Usuario" component={Usuario}/>
        <Stack.Screen name="Solicitud" component={Solicitud}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


