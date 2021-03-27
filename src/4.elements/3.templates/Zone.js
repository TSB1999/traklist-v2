import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Menu from '../2.organisms/menu';
export default function Zone() {
  return (
    <View>
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <Menu />
      </SafeAreaView>
      <Text>Zone</Text>
    </View>
  );
}
