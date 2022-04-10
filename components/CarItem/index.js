import react from "react";
import { View, Text, ImageBackground, Button } from 'react-native';
import StyledButton from '../StyledButton'

import styles from "./styles";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/ModelS.jpeg')}
        style={styles.bgImage}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting at $69,420</Text>
      </View>

      <StyledButton
        type='primary'
        content={'custom order'}
        onPress={() => {
          console.warn('button 1')
        }}
      />

      <StyledButton
        type='secondary'
        content={'Existing Inventory'}
        onPress={() => {
          console.warn('button 2')
        }}
      />
    </View>
  );
};

export default CarItem;