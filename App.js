import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { DrawerNavigatorItems, createDrawerNavigator } from 'react-navigation-drawer';
import { Dimensions, SafeAreaView, ScrollView, View, Button } from 'react-native';
import IntrodactionScreen from './src/screens/IntrodactionScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import PrivacyPolicyScreen from './src/screens/PrivacyPolicyScreen';
import InvoiceListScreen from './src/screens/InvoiceListScreen';
import InvoiceDetailScreen from './src/screens/InvoiceDetailScreen';
import ScanScreen from './src/screens/ScanScreen';
import ProductScreen from './src/screens/ProductScreen';
import FoodCoastScreen from './src/screens/FoodCoastScreen';
import VendorScreen from './src/screens/VendorScreen';
import AlertScreen from './src/screens/AlertScreen';

const WIDH = Dimensions.get('window').width;

const MainDrawerNavigation = (props) => {
  return (
    <SafeAreaView> 
      <ScrollView>
        <DrawerNavigatorItems {...props} />
      </ScrollView>
    </SafeAreaView>
  );
};

const ReportDrawerNavigation = (props) => {
  return (
    <View style = {{
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 15
    }}>
      <SafeAreaView> 
        <ScrollView>
          <DrawerNavigatorItems {...props} />
        </ScrollView>
          <Button title = "Back" onPress = {() => props.navigation.navigate('menu') }/> 
      </SafeAreaView>
    </View>
  );
};

const switchNavigator = createSwitchNavigator({
  
  loginFlow: createStackNavigator({
    Introdaction: IntrodactionScreen,
    Login: LoginScreen,
    Registration: RegistrationScreen,
    PrivacyPolicy: PrivacyPolicyScreen,
  }),
  menu: createDrawerNavigator({
    Invoices: createStackNavigator({
      InvoiceList: InvoiceListScreen,
      InvoiceDetail: InvoiceDetailScreen,
      Scan: ScanScreen
    }),
    Product: ProductScreen,
    Report: createDrawerNavigator({
      FoodCoast: FoodCoastScreen,   
    },
    {
      drawerPosition: 'left',
      contentComponent: ReportDrawerNavigation,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',
      drawerWidth: (WIDH / 3) * 2
    }), 
    Alerts: AlertScreen,
    Vendors: VendorScreen
  },
  {
    drawerPosition: 'left',
    contentComponent: MainDrawerNavigation,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: (WIDH / 3) * 2
  })
});

const App = createAppContainer(switchNavigator);

export default App;
