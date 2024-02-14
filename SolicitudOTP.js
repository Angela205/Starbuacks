// SolicitudOTP.js
import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';

const SolicitudOTP = ({ navigation }) => {
  const handleNext = () => {
    // Aquí puedes agregar la lógica para verificar el OTP y navegar a la siguiente pantalla
    // navigation.navigate('SiguientePantalla');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Ingrese su contraseña de segundo factor (OTP):</Text>
      <TextInput style={styles.input} placeholder="Ingrese su OTP" />
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default SolicitudOTP;
