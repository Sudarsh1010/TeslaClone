import react from "react";
import { View, Text, ImageBackground, Button } from 'react-native';
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

      {/* <Button>

      </Button> */}
    </View>
  );
};

export default CarItem;