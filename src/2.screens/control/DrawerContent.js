import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {SafeAreaView, View, Text} from 'react-native';
import {Drawer} from 'react-native-paper';

export default function DrawerContent(props) {
  return (
    <SafeAreaView>
      <DrawerContentScrollView {...props}>
        {/* Laborum adipisicing commodo incididunt tempor. */}
      </DrawerContentScrollView>
      <Drawer.Section>
        <DrawerItem
          //   icon={({color, size}) => (
          //     <AntDesign name="home" color={color} size={size} />
          //   )}
          label="Home"
          onPress={() => {
            props.navigation.navigate('HomeDrawer');
          }}
        />
      </Drawer.Section>
      <Drawer.Section>
        <DrawerItem
          //   icon={({color, size}) => (
          //     <Icon name="exit-to-app" color={color} size={size} />
          //   )}
          label="Sign Out"
          onPress={() => {
            // UserStore.isLoggedIn = false;
          }}
        />
      </Drawer.Section>
    </SafeAreaView>
  );
}
