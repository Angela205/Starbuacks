import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';

const UserSignIn = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Aquí puedes agregar la lógica para iniciar sesión
    // Por ejemplo, verificar las credenciales y navegar a la siguiente pantalla si son correctas
    navigation.navigate('Solicitud');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <Image source={require('../imagenes/starbucks.png')} style={[styles.logo, styles.logoLarge]} />

      {/* Texto "starbucksusuario" */}
      <Text style={styles.usernameText}>Starbucks</Text>

      {/* Campos de entrada para nombre de usuario y contraseña */}
      <View style={styles.inputContainer}>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Gmail"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Botón Sign In */}
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>

      {/* Imagen en la esquina inferior derecha */}
      <Image source={require('../imagenes/esquina.png')} style={styles.bottomRightImage} />

      {/* Agregado de la parte superior */}
      <View style={styles.topSection}>
        <Text style={styles.topText}>Bienvenido a Starbucks</Text>
        <Text style={styles.topText}>Por favor inicia sesión</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 10, // Distancia de 10 desde la parte superior
  },
  logoLarge: {
    width: 200,
    height: 200,
  },
  usernameText: {
    fontSize: 20,
    marginTop: 10,
    color: 'black',
  },
  inputContainer: {
    marginTop: 20,
    width: '80%',
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    borderRadius: 20, 
    color: 'black', 
  },
  signInButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  signInText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase', // Convertir texto a mayúsculas
    textAlign: 'center', // Centrar el texto
  },
  bottomRightImage: {
    position: 'absolute',
    bottom: 0, // Ajustar para que no quede muy arriba ni muy abajo
    right: 0,
    width: 300,
    height: 300,
  },
  // Estilos para la parte superior
  topSection: {
    position: 'absolute',
    top: 50, // Ajustar la distancia desde la parte superior según sea necesario
    alignItems: 'center',
  },
  topText: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default UserSignIn;
