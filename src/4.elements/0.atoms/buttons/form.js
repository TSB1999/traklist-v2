import React from 'react';
import {View, Text, TouchableWithoutFeedback, StyleSheet} from 'react-native';

export default function form({...props}) {
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => (!props.disable ? alert('hi') : null)}>
        <View style={[styles.button, {backgroundColor: props.color}]}>
          <Text style={styles.text}>{props.text}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
