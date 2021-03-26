import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Icon name="rocket" size={30} color="000" />
      </View>
    </SafeAreaView>
  );
};

export default App;
