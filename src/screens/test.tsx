import * as React from 'react';
import { Button, View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { RegisterScreen } from './RegisterScreen';
import { TaskScreen } from './TaskScreen';

// Screen names
// const homeName = 'Home';
// const taskName = 'Task';
// const loginName = 'Login';
// const registerName = 'Register';

// const Tab = createBottomTabNavigator();

// export function MainContainer() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator
//             initialRouteName={homeName}
//             // screenOptions={{}}
//             >
//                 <Tab.Screen name={homeName} component={HomeScreen}/>
//                 <Tab.Screen name={taskName} component={TaskScreen}/>
//                 <Tab.Screen name={loginName} component={LoginScreen}/>
//                 <Tab.Screen name={registerName} component={RegisterScreen}/>

//             </Tab.Navigator>
//         </NavigationContainer>
//     )
// }