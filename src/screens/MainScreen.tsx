import * as React from 'react';
import { Tab } from '../navigation/types';
import Icon from 'react-native-vector-icons/FontAwesome';

// Screens
import { HomeScreen } from './HomeScreen';
import { TaskScreen } from './TaskScreen';
import { LoginScreen } from './LoginScreen';

export function MainScreen() {
  return (
    <Tab.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}      
        options={{
          tabBarLabel: 'Home',
          tabBarIcon:()=>(  
            <Icon name="home" size={30} />
        ) 
        }}
      /> 
      <Tab.Screen 
        name="Task" 
        component={TaskScreen} 
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon:()=>(  
            <Icon name="check-square-o" size={30} />
        ) 
        }}
      />
      {/* <Tab.Screen name="Login" component={LoginScreen} options={{ title: 'Logout' }}/> */}
    </Tab.Navigator>
  );
};