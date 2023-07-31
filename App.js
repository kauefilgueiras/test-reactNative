import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './src/components/Header';
import StatusGPS from './src/components/StatusGPS';
import ServiceStatus from './src/components/ServiceStatus';
import DefineInterval from './src/components/DefineInterval';
import Status from './src/screens/Status';

const Separator = () => {
  return <View style={styles.separator} />;
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}options={{ headerShown: false }} />
        <Stack.Screen name="Status" component={Status} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#050263' />
      <Header/>
      <StatusGPS/>
      <Separator/>
      <ServiceStatus/>
      <DefineInterval/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#EAEAEA',
  },
});
