import React from 'react';
import {SafeAreaView, Text, Button} from 'react-native';

const Splash = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Splash screen</Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate('Registration')}
      />
      <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
    </SafeAreaView>
  );
};

export default Splash;
