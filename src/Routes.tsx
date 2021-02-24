import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from './screens/Home';
import InputsHookState from './screens/InputsHookState';
import InputsTradicional from './screens/InputsTradicional';

const Stack = createStackNavigator();
const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="InputsHookState"
        component={InputsHookState}
        options={{
          headerTitle: 'Inputs Hookstate',
        }}
      />
      <Stack.Screen
        name="InputsTradicional"
        component={InputsTradicional}
        options={{
          headerTitle: 'Inputs Tradicional',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
