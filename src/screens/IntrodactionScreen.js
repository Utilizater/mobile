import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

export default class IntrodactionScreen extends Component {
  static navigationOptions = {
    title: 'Introdaction'
  };

  render () {
    const {navigate} = this.props.navigation;

    return (
      <View style = {{ 
        alignItems: 'center',
        width: 200,
        alignSelf: 'center',
        justifyContent: 'space-around',
        flex: 1
      }}>
        <Button 
          title = "Registration"
          onPress = {() => navigate('Registration')}
        />
        <Button 
          title = "Login"
          onPress = {() => navigate('Login')}
        />
        <TouchableOpacity
          onPress = {() => navigate('PrivacyPolicy')}
        >
          <Text>Term of Service and Private Policy</Text>
        </TouchableOpacity>
      </View>
    );
  };
}
  