import React from 'react';
import {StyleSheet, View} from 'react-native';

import Numero from './Numero';

export default props => (
  <View style={styles.numeros}>
    <Numero numero={props.primeiroNumero} atualizaValor={props.atualizaValor} nome='primeiroNumero' />
    <Numero numero={props.segundoNumero} atualizaValor={props.atualizaValor}  nome='segundoNumero' />
  </View>
);

const styles = StyleSheet.create({
  numeros: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
