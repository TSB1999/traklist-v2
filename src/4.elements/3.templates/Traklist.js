import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import Landing from '../2.organisms/home__landing';
import Menu from '../2.organisms/menu';
import {setLoading, setLoggedIn} from '../../0.redux/actions';

export default function Traklist() {
  return (
    <View style={{backgroundColor: '#292929'}}>
      <Landing />
    </View>
  );
}
