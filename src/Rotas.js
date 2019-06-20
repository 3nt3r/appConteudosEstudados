import React from 'react';
import {Router, Scene, Stack, StyleSheet} from 'react-native-router-flux';

import TelaInicial from './TelaInicial';
import Http from './components/Http/Http';

const Rotas = () => (

  <Router>
    <Stack key="root">
      <Scene key='telainicial' component={TelaInicial} title="Tela Inicial" initil />
      <Scene key='http' component={Http} title="HTTP" />
    </Stack>
  </Router>

);

export default Rotas;
