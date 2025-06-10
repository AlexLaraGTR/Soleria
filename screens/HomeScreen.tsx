import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Pressable,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import * as Haptics from 'expo-haptics';

export default function HomeScreen() {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
    Haptics.selectionAsync(); // vibración suave
    navigation.navigate('Bienvenida' as never);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <LottieView
          source={require('../assets/animations/ArbolDeLaVida.json')}
          autoPlay
          loop
          style={styles.animacion}
        />
      </Animated.View>

      <Text accessibilityRole="header" style={styles.titulo}>
        Bienvenido a Soleria
      </Text>
      <Text style={styles.subtitulo}>
        Un espacio para reconectar contigo mismo
      </Text>

      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <Pressable
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={styles.boton}
        >
          <Text style={styles.textoBoton}>Empezar</Text>
        </Pressable>
      </Animated.View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  animacion: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 16,
    color: '#cfcfcf',
    marginBottom: 30,
    textAlign: 'center',
  },
  boton: {
    backgroundColor: '#ffcc00',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  textoBoton: {
    color: '#1e1e2e',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
