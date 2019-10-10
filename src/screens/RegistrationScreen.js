import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class RegistrationScreen extends Component {
  static navigationOptions = {
    title: 'Registration'
  };

  render () {
    const {navigate} = this.props.navigation;

    return (
      <View
        style = {{ 
          alignItems: 'center',
          width: 200,
          alignSelf: 'center',
          justifyContent: 'space-around',
          flex: 1
        }}
      >
        <Button 
          title = "Login"
          onPress = {() => navigate('Login')}
        />
      </View>
    );
  };
}
  