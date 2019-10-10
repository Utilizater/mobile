import React, { Component } from 'react';
import {View, FlatList, StyleSheet } from 'react-native';
import InvoiceItem from '../components/InvoiceItem';
import RoundButton from '../components/RoundButton';

export default class InvoiceListScreen extends Component {
  static navigationOptions = {
    title: 'Invoices',
  };

  render () {
    const {navigation} = this.props;
    
    const tempArr = [
      {name: 'Invoice 1'},
      {name: 'Invoice 2'},
      {name: 'Invoice 3'},
    ];

    const styles = StyleSheet.create({
      main: {
        marginTop: 10,
        padding: 10,
        flex: 1
      }
    });

    return (
      <View style = { styles.main }>
        <FlatList 
          data = { tempArr }
          renderItem = {({ item }) => <InvoiceItem 
          name = { item.name } 
          navigate = { navigation.navigate }/>}
          keyExtractor = { item => item.name } 
        />
        <View style = {{
          position: 'absolute',
          right: 25,
          bottom: 100,
          zIndex: 10
        }}>
          <RoundButton 
            buttonType = "scan"
            navigate = {navigation.navigate}
            navigateTo = 'Scan'
          />
        </View>
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
        <View style = {{
            position: 'absolute',
            right: 25,
            bottom: 25,
            zIndex: 10
          }}>
          <RoundButton 
            buttonType = "search"
          />
        </View>            
      </View>     
    );
  };
}
