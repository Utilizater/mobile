import React, { Component } from 'react';
import {View, FlatList, StyleSheet } from 'react-native';
import InvoiceItem from '../components/InvoiceItem';
import RoundButton from '../components/RoundButton';
import { Button } from 'react-native-elements';

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
      },
      bottomButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      scanButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 5
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
        <Button title = 'Menu' onPress={() => this.props.navigation.openDrawer()}/>
        <View style = {styles.scanButtons}>
          <RoundButton 
            buttonType = "scan"
            navigate = {navigation.navigate}
            navigation = {this.props.navigation}
            navigateTo = 'Scan'
          />
        </View>
        <View style = {styles.bottomButtons}>
          <RoundButton buttonType = "menu" navigate = {navigation.navigate} navigateTo = 'menu'/>
          <RoundButton buttonType = "search"/>
        </View>         
      </View>     
    );
  };
}

