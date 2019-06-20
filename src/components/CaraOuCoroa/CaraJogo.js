import React, {Component} from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';

const cara = require('../../imagens/caraimagens/moeda_cara.png');
const coroa = require('../../imagens/caraimagens/moeda_coroa.png');

export default class CaraJogo extends Component {

  constructor(props){
    super(props);
    this.state = {
      resultado: ''
    };
  }

  componentWillMount(){
    const numeroAleatorio = Math.floor(Math.random() * 2);
    let caraOuCoroa = '';

    if (numeroAleatorio === 0) {
      caraOuCoroa = 'cara';
    }else{
      caraOuCoroa = 'coroa';
    }
    this.setState({resultado: caraOuCoroa});
  }

  render(){

      if (this.state.resultado === 'coroa') {
        return(
          <View style={styles.resultado}>
            <Image source={coroa} />
          </View>
        );
      }
      return(
        <View style={styles.resultado}>
          <Image source={cara} />
        </View>
      );

  }
}

const styles = StyleSheet.create({
  resultado: {
    flex: 1,
    backgroundColor: '#61BD8C',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
