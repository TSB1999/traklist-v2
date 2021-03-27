import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTab from './2.screens/control/MainTab';
import DrawerContent from './2.screens/control/DrawerContent';

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTab} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
