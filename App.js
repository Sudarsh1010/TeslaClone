import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CarItem from './components/CarItem';

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        name={'Model S'}
        tagline={'$xx,xxx'}
        taglineCTA={'touchless delivery'}
        image={require('./assets/images/ModelS.jpeg')}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
