/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, QRCodeReaderScreen} from './src/screens';

const Stack = createNativeStackNavigator();

export const ROUTES = {
  home: 'HOME',
  qRCodeReader: 'QRCodeReader',
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ROUTES.home}>
        <Stack.Screen
          name={ROUTES.home}
          component={HomeScreen}
          options={{
            title: 'X Admin',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name={ROUTES.qRCodeReader}
          component={QRCodeReaderScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
