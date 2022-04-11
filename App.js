import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CarsList from './components/CarsList';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <View style={styles.container}>
      <NavBar />
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});