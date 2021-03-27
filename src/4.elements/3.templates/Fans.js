import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Menu from '../2.organisms/menu';

export default function Fans() {
  return (
    <View>
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <Menu />
      </SafeAreaView>
      <Text>Fans</Text>
    </View>
  );
}
