import { View, Text, StyleSheet } from 'react-native';

export default function BienvenidaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Esta es la pantalla de bienvenida ✨</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
  },
});