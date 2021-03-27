import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './Splash';
import Register from './Register';
import SignIn from './SignIn';
const RootStack = createStackNavigator();

export default function RootStackScreen({navigation}) {
  return (
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="Splash" component={Splash} />
      <RootStack.Screen name="SignIn" component={SignIn} />
      <RootStack.Screen name="Registration" component={Register} />
    </RootStack.Navigator>
  );
}
