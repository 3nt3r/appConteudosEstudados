import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default class Itens extends Component {

  render() {
    return (

      <View style={style.container}>
        <View style={style.imagem}>
          <Image source={{uri: this.props.item.foto}} style={{height: 110, width: 110}}/>
        </View>
        <View style={style.descricao}>
          <Text style={style.titulo}> {this.props.item.titulo} </Text>
          <Text style={style.valor}> R$ {this.props.item.valor} </Text>
          <Text style={style.informacoes}> Localidade: {this.props.item.local_anuncio} </Text>
          <Text style={style.informacoes}> {this.props.item.data_publicacao} </Text>
        </View>
      </View>

    );
  }
}

const style = StyleSheet.create({
  container: {
    borderColor: '#9C9C9C',
    borderWidth: 0.5,
    flex: 2,
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: 'white'
  },
  imagem: {
    paddingRight: 10
  },
  titulo: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 13
  },
  informacoes: {
    fontWeight: 'bold'
  },
  valor: {
    fontWeight: 'bold',
    color: '#00CD00'
  },
  descricao: {
    flex: 1
  }
});
