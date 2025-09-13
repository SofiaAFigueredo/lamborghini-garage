import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GarageScreen from './src/Screens/GarageScreen/Garage';

export default function App() {
  return (
    <View style={styles.container}>
      <GarageScreen/>
      <StatusBar style='light' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Criando as load functions dos buttons - 05:52