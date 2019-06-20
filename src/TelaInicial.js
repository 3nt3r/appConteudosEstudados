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
            title="Requisições HTTP com o Axios"
            color="#32CD32"
          />
        </View>

        <View style={styles.distanciaBotoes}>
          <Button
            onPress={() => { Actions.jokenpo(); }}
            title="Pedra, Papel e Tesoura"
            color="#EE0000"
          />
        </View>

        <View style={styles.distanciaBotoes}>
          <Button
            onPress={() => { Actions.coroa(); }}
            title="Cara ou Coroa"
            color="#9400D3"
          />
        </View>

        <View style={styles.distanciaBotoes}>
          <Button
            onPress={() => { Actions.calculadora(); }}
            title="Calculadora"
            color="#1C86EE"
          />
        </View>

        <View style={styles.distanciaBotoes}>
          <Button
            onPress={() => { Actions.saibamais(); }}
            title="Saiba Mais"
            color="#BEBEBE"
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
