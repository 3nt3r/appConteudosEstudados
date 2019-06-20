import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Principal extends Component {
  render() {
    return (
      <View>

        <Text style={styles.textoTitulo}> Escolha uma opção </Text>

        <View style={styles.distanciaBotoes}>
          <Button
            onPress={() => { Actions.http(); }}
            title="HTTP com Axios"
            color="#FF8C00"
          />
        </View>

        <View style={styles.distanciaBotoes}>
          <Button
            onPress={() => { Actions.jokenpo(); }}
            title="Jokenpo"
            color="#FFB90F"
          />
        </View>

        <View style={styles.distanciaBotoes}>
          <Button
            onPress={() => { Actions.coroa(); }}
            title="Cara ou Coroa"
            color="#EE7621"
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  textoTitulo: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 30
  },
  distanciaBotoes: {
    padding: 25
  }
});
