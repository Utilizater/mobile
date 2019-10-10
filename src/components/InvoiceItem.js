import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const InvoiceItem = ({ name, navigate }) => {
  return (
    <TouchableOpacity
      onPress = {() => navigate('InvoiceDetail')}
    >
      <View
        style = {{
          marginTop: 5,
          borderTopColor: 'black',
          borderBottomColor: 'black',
          borderTopWidth: 1,
          width: 500          
        }}
      >
        <Text>{ name }</Text>
      </View>
    </TouchableOpacity> 
  );
};

export default InvoiceItem;