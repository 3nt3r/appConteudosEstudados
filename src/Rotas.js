import React from 'react';
import {Router, Scene, Stack, StyleSheet} from 'react-native-router-flux';

import TelaInicial from './TelaInicial';
import Http from './components/Http/Http';
import Jogo from './components/Jokenpo/Jogo';
import CaraJogo from './components/CaraOuCoroa/CaraJogo';

const Rotas = () => (

  <Router>
    <Stack key="root">
      <Scene key='telainicial' component={TelaInicial} title="Tela Inicial" initil />
      <Scene key='http' component={Http} title="Requisições HTTP" />
      <Scene key='jokenpo' component={Jogo} title="Jokenpo" />
      <Scene key='coroa' component={CaraJogo} title="Cara ou Coroa" />
    </Stack>
  </Router>

);

export default Rotas;
