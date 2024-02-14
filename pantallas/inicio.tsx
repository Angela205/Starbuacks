import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Image, Text, View } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simular una espera de 2 segundos antes de navegar a la siguiente pantalla
    const timer = setTimeout(() => {
      navigation.navigate('Usuario');
    }, 2000);

    // Limpieza del temporizador
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.topText}>Bienvenido a Starbucks</Text>
        <Text style={styles.topText}>Cargando...</Text>
      </View>
      <Image source={require('../imagenes/starbucks.png')} style={styles.image} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  topSection: {
    position: 'absolute',
    top: 50, // Ajustar la distancia desde la parte superior según sea necesario
    alignItems: 'center',
  },
  topText: {
    fontSize: 18,
    marginBottom: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderWidth: 0, 
  },
});

export default SplashScreen;
