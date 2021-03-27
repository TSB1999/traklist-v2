import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Landing from '../2.organisms/home__landing';
import Menu from '../2.organisms/menu';
// import styles from './'
export default function Traklist() {
  return (
    <View>
      <SafeAreaView>
        <Menu />
      </SafeAreaView>
      <Landing />
    </View>
  );
}
