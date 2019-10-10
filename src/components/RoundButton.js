import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather, FontAwesome, Entypo, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const RoundButton = ({ buttonType, navigate, navigateTo, navigation }) => {
  
  const getElement = (buttonType) => {
    switch (buttonType) {
      case 'menu':
        return <Feather name='menu' size={32} color='black' />;
      case 'cancel':
        return <FontAwesome name='close' size={32} color='black' />;
      case 'submit':
        return <Entypo name='check' size={32} color='black' />;
      case 'search':
        return <MaterialIcons name='search' size={32} color='black' />;
      case 'scan':
        return <MaterialCommunityIcons name='qrcode-scan' size={32} color='black' />;
    };
  };

  return (
    <TouchableOpacity
      onPress = {() => {
        if (navigateTo === "menu")
          navigation.openDrawer();  //I don't understand yet why it does not work
        else
          navigate(navigateTo)}
      }
    >
      <View
        style = {style.circle}
      >
      {getElement(buttonType)}
      </View>
    </TouchableOpacity> 
  );
};


const style = StyleSheet.create({
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgb(0, 255, 255)',
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default RoundButton;
