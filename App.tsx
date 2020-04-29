import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from 'react-native';
import Summary from './components/Summary';
import NewExpense from './components/NewExpense';
import Login from './components/LoginPage';

declare const global: {HermesInternal: null | {}};
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "50px",
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  navigationContainer: {
    flex: 1,
    paddingTop:  "50px",
    backgroundColor: "#fff",
    padding: 8
  }
});

  const navigationView = (
    <View >
      <Text style={{ margin: 10, fontSize: 15 }}>I'm in the Drawer!</Text>
    </View>
  );
const App = () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="Summary"
            component={Summary}
            options={{title: 'Expense Manager'}}
          />
         <Drawer.Screen name="Log new expense" component={NewExpense} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
};

export default App;
