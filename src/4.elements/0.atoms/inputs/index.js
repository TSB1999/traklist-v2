import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default function TRAKLIST_TEXTINPUT({...props}) {
  let placeholder;
  switch (props.type) {
    case 'email':
      placeholder = 'type your email';
      break;
    case 'password':
      placeholder = 'type in a password';
      break;
    case 'confirmpassword':
      placeholder = 'confirm your password';
      break;
    default:
    // code block
  }
  return <TextInput placeholder={placeholder} style={styles.text_input} />;
}

const styles = StyleSheet.create({
  text_input: {
    backgroundColor: '#C4C4C4',
    padding: 10,
    borderRadius: 5,
  },
});
