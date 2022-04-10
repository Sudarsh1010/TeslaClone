import { View, Text, ImageBackground, Button } from 'react-native';
import StyledButton from '../StyledButton'

import styles from "./styles";

const CarItem = (props) => {

  const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={image}
        style={styles.bgImage}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline}
          {' '}
          <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
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
    </View>
  );
};

export default CarItem;