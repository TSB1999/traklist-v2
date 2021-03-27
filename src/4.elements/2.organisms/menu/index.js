import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Menu() {
  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={() => alert('drawer open')}>
        <Entypo name="menu" size={30} color="#292929" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('listening for music')}>
        <MaterialCommunityIcons name="waveform" size={30} color="#292929" />
      </TouchableOpacity>
    </View>
  );
}
