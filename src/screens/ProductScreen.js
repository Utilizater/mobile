import React, { Component } from 'react';
import { View, Text } from 'react-native'; 
import RoundButton from '../components/RoundButton';

export default class ProductScreen extends Component {
  static navigationOptions = {
    title: 'Product',
  };

  render () {
    const {navigation} = this.props;
    return (
      <View style = {{
        flex: 1
      }}>
        <Text>Product</Text>
        <View style = {{
            position: 'absolute',
            left: 25,
            bottom: 25,
            zIndex: 10
          }}>
          <RoundButton 
            buttonType = "menu"
            navigate = {navigation.navigate}
            navigateTo = 'menu'
            navigation = {navigation}
          />
        </View>
      </View>
    );
  };
}
  