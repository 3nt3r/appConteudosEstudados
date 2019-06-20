import React from 'react';
import {Router, Scene, Stack, StyleSheet} from 'react-native-router-flux';

import TelaInicial from './TelaInicial';
import Http from './components/Http/Http';
import Jogo from './components/Jokenpo/Jogo';
import CaraJogo from './components/CaraOuCoroa/CaraJogo';
import Calculadora from './components/Calculadora/Calculadora';
import SaibaMais from './SaibaMais';

const Rotas = () => (

  <Router>
    <Stack key="root">
      <Scene key='telainicial' component={TelaInicial} title="Tela Inicial" initil />
      <Scene key='http' component={Http} title="Requisições HTTP com Axios" />
      <Scene key='jokenpo' component={Jogo} title="Pedra, Papel e Tesoura" />
      <Scene key='coroa' component={CaraJogo} title="Cara ou Coroa" />
      <Scene key='calculadora' component={Calculadora} title="Calculadora" />
      <Scene key='saibamais' component={SaibaMais} title="Obrigado!" />
    </Stack>
  </Router>

);

export default Rotas;
