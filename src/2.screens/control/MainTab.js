import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Traklist from '../Traklist';
import Zone from '../Zone';
import Discover from '../Discover';
import Fans from '../Fans';
import Start from '../Start';
import Profile from '../Profile';

const Tab = createMaterialBottomTabNavigator();

export default function MainTab() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      barStyle={{backgroundColor: '#292929'}}
      activeColor="green"
      inactiveColor="grey"
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="TRAKLIST"
        component={Traklist}
        options={{
          tabBarLabel: 'TRAKLIST',
          tabBarColor: '#292929',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="record-vinyl" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="ZONE"
        component={Zone}
        options={{
          tabBarLabel: 'ZONE',
          tabBarColor: '#292929',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="transit-connection"
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DISCOVER"
        component={Discover}
        options={{
          tabBarLabel: 'DISCOVER',
          tabBarColor: '#292929',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="explore" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="FANS"
        component={Fans}
        options={{
          tabBarLabel: 'FANS',
          tabBarColor: '#292929',
          tabBarIcon: ({color}) => (
            <MaterialIcons
              name="face-retouching-natural"
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PROFILE"
        component={Start}
        options={{
          tabBarLabel: 'START',
          tabBarColor: '#292929',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="ray-start-arrow"
              color={color}
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
