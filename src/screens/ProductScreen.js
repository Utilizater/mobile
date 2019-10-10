import React, { Component } from 'react';
import { View, Text} from 'react-native'; 

export default class ProductScreen extends Component {
  static navigationOptions = {
    title: 'Product'
  };

  render () {
    return (
      <View>
        <Text>Product</Text>
      </View>
    );
  };
}
  