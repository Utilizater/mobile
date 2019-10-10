import React, { Component } from 'react';
import { View, Text } from 'react-native'; 

export default class AlertScreen extends Component {
  static navigationOptions = {
    title: 'Alert',
  };

  render () {
    return (
      <View>
        <Text>Alert</Text>
      </View>
    );
  };
}
  