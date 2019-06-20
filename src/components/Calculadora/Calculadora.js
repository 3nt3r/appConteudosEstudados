import React, { Component } from 'react';
import {View} from 'react-native';

import {Topo, Resultado, Painel} from './components';

export default class App extends Component{

  constructor(props){
    super(props);

    this.state = {primeiroNumero: '', segundoNumero: '', operacao: 'soma', resultado: 'Resultado'}

    this.calcular = this.calcular.bind(this);
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
  }

  calcular(){
    let resultado = 0;

    switch (this.state.operacao) {
      case 'soma':
        resultado = parseFloat(this.state.primeiroNumero) + parseFloat(this.state.segundoNumero);
        break;
      case 'subtracao':
        resultado = parseFloat(this.state.primeiroNumero) - parseFloat(this.state.segundoNumero);
        break;
      case 'multiplicacao':
        resultado = parseFloat(this.state.primeiroNumero) * parseFloat(this.state.segundoNumero);
        break;
      case 'divisao':
        resultado = parseFloat(this.state.primeiroNumero) / parseFloat(this.state.segundoNumero);
        break;
      default:
        resultado = 0;
    }

    this.setState({resultado: resultado.toString()});

  }

  atualizaValor(campo, valor){
    const objeto = {};
    objeto[campo] = valor;
    this.setState(objeto);
  }

  atualizaOperacao(opcao){
    this.setState({operacao: opcao});
  }

  render(){
    return(
      <View>
        <Topo />
        <Resultado resultado={this.state.resultado} />
        <Painel
          primeiroNumero={this.state.primeiroNumero}
          segundoNumero={this.state.segundoNumero}
          atualizaValor={this.atualizaValor}
          operacao={this.state.operacao}
          atualizaOperacao={this.atualizaOperacao}
          calcular={this.calcular}
        />
      </View>
    );
  }
}
