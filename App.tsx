import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Summary from './components/Summary';
declare const global: {HermesInternal: null | {}};
const Stack = createStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Summary"
            component={Summary}
            options={{title: 'Summary Expense'}}
          />
        </Stack.Navigator>
        <Stack.Screen name="Profile" component={Summary} />
      </NavigationContainer>
  );
};

export default App;
