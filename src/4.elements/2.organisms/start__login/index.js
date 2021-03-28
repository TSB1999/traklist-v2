import React from 'react';
import {View, Text, TextInput} from 'react-native';

export default function Login() {
  return (
    <View>
      <View>
        <Text>Name</Text>
        <TextInput placeholder="name" />
      </View>
      <View>
        <Text>Password</Text>
        <TextInput placeholder="password" />
      </View>
    </View>
  );
}
