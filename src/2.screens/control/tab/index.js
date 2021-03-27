import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// import Traklist from '../../1.Traklist';
// import Zone from '../../2.Zone';
// import Discover from '../../3.Discover';
// import Fans from '../../4.Fans';
import Start from '../../5a.Start';
// import Profile from '../../5b.Profile';

import TraklistStack from './TraklistStack';
import ZoneStack from './ZoneStack';
import DiscoverStack from './DiscoverStack';
import FansStack from './FansStack';
import ProfileStack from './ProfileStack';

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
        component={TraklistStack}
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
        component={ZoneStack}
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
        component={DiscoverStack}
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
        component={FansStack}
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
