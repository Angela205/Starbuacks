import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View, TextInput } from 'react-native';

const Solicitud = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleContinuar = () => {
    // Enviar los datos a la siguiente pantalla mediante el proceso de navegación
    //navigation.navigate('PantallaSiguiente', { nombre, correo, telefono });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text style={styles.label}>Correo electrónico</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su correo electrónico"
        value={correo}
        onChangeText={setCorreo}
      />

      <Text style={styles.label}>Teléfono</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su teléfono"
        value={telefono}
        onChangeText={setTelefono}
      />

      <TouchableOpacity style={styles.continuarButton} onPress={handleContinuar}>
        <Text style={styles.continuarButtonText}>Continuar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  continuarButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
  },
  continuarButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Solicitud;
