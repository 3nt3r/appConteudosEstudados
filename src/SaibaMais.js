import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class SaibaMais extends Component {
  render() {
    return (
      <View>

        <Text style={styles.informacao}> Código disponível no GitHub </Text>

        <Text style={styles.codigo}> https://github.com/3nt3r/finalApp </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  informacao: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 200,
    paddingBottom: 150
  },
  codigo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
