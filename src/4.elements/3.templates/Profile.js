import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Menu from '../2.organisms/menu';
export default function Profile() {
  return (
    <View>
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <Menu />
      </SafeAreaView>
    </View>
  );
}
