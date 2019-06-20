import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default props => (
    <View>
      <TextInput placeholder='Resultado' editable={false} style={styles.visor} value={props.resultado} />
    </View>
);

const styles = StyleSheet.create({
  visor:{
    fontSize: 20,
    height: 80,
    textAlign: 'center'
  }
});
