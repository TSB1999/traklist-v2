import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FANS from '../../../2.screens/4.Fans';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

const StackScreen = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: 'grey',
      }}>
      <Stack.Screen
        name="Home"
        component={FANS}
        options={{
          title: '',
          headerLeft: () => (
            <Entypo.Button
              name="menu"
              size={30}
              backgroundColor="#fff"
              color="#292929"
              onPress={() => navigation.openDrawer()}
              style={{paddingLeft: 16}}></Entypo.Button>
          ),
          headerRight: () => (
            <MaterialCommunityIcons.Button
              name="waveform"
              size={30}
              backgroundColor="#fff"
              color="#292929"
              onPress={() => navigation.navigate('POST.')}
              style={{paddingLeft: 16}}></MaterialCommunityIcons.Button>
          ),
        }}
      />
      {/* <Stack.Screen name="POST." component={AddPost} /> */}
      {/* <HomeStack.Screen name="Me" component={ProfileScreen} />
      <HomeStack.Screen name="Settings" component={SettingsScreen} /> */}
    </Stack.Navigator>
  );
};

export default StackScreen;
