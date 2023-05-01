import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Stack, Tab } from './src/navigation/types';
import 'react-native-url-polyfill/auto';

// Screens
import { MainScreen } from './src/screens/MainScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { RegisterScreen } from './src/screens/RegisterScreen';
import { TaskScreen } from './src/screens/TaskScreen';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Main"
        screenOptions={{
          headerShown: false
      }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}