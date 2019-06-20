import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

export default props => (
  <View style={styles.dimensao}>
    <Button title='Calcular' onPress={props.calcular} />
  </View>
);

const styles = StyleSheet.create({
  dimensao: {
    padding: 30
  }
});
