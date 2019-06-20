import React from 'react';
import {Router, Scene, Stack, StyleSheet} from 'react-native-router-flux';

import TelaInicial from './TelaInicial';
import Http from './components/Http/Http';
import Jogo from './components/Jokenpo/Jogo';

const Rotas = () => (

  <Router>
    <Stack key="root">
      <Scene key='telainicial' component={TelaInicial} title="Tela Inicial" initil />
      <Scene key='http' component={Http} title="Requisições HTTP" />
      <Scene key='jokenpo' component={Jogo} title="Jogo Jokenpo" />
    </Stack>
  </Router>

);

export default Rotas;
