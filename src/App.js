import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTab from './2.screens/control/tab';
import DrawerContent from './2.screens/control/drawer';

import store from './0.redux/store';

store.subscribe(() => {
  alert('Store changed!', store.getState());
});

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
