import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TRAKLIST_TEXT({...props}) {
  return (
    <View>
      <Text style={[styles.text, {textAlign: props.textAlign}]}>
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontFamily: 'Verdana',
    fontSize: 28,
    fontWeight: '400',
  },
});
