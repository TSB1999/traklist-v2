import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import Landing from '../2.organisms/start__landing';
import LogIn from '../2.organisms/start__login';
import AltLogIn from '../2.organisms/start__alt-login';

export default function Start() {
  return (
    <View>
      <Landing />
      <LogIn />
      <AltLogIn />
    </View>
  );
}
