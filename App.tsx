import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BienvenidaScreen from './screens/BienvenidaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Soleria' }} />
        <Stack.Screen name="Bienvenida" component={BienvenidaScreen} options={{ title: 'Bienvenida' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}