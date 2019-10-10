import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

export default class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
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
          title = "Registration"
          onPress = {() => navigate('Registration')}
        />
        <Button 
          title = "Login"
          onPress = {() => navigate('menu')}
        />
      </View>
    );
  };
}
  