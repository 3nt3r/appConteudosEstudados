import React, {Component} from 'react';
import {View, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Principal extends Component {
  render() {
    return (
      <View>

        <Button
          onPress={() => { Actions.http(); }}
          title="HTTP"
          color="#FF8C00"
        />

      </View>
    );
  }
}
