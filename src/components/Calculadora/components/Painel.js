import React from 'react';
import {View} from 'react-native';

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

const Painel = props => (
  <View>
    <Entrada primeiroNumero={props.primeiroNumero} segundoNumero={props.segundoNumero} atualizaValor={props.atualizaValor} />
    <Operacao operacao={props.operacao} atualizaOperacao={props.atualizaOperacao} />
    <Comando calcular={props.calcular} />
  </View>
);

export {Painel};
