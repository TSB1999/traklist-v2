import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTab from './2.screens/control/MainTab';
import DrawerContent from './2.screens/control/DrawerContent';
import RootStackScreen from './2.screens/RootStack';

const App = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTab} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
