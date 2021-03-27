import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

export default function SignIn({navigation}) {
  return (
    <SafeAreaView>
      <Text>Sign In Screen</Text>
      <Button
        title="SIGNIN --> Splash"
        onPress={() => navigation.navigate('SplashScreen')}
      />
    </SafeAreaView>
  );
}
