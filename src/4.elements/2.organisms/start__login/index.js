import React from 'react';
import {View, Button, TouchableWithoutFeedback, Text} from 'react-native';
import TRAKLIST_FORM_SECTION from '../../1.molecules/form_section';
import TRAKLIST_BUTTON from '../../0.atoms/buttons/form';
import styles from './styles';

export default function Login() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.section}>
          <TRAKLIST_FORM_SECTION label="email" type="email" />
        </View>
        <View style={styles.section}>
          <TRAKLIST_FORM_SECTION label="password" type="password" />
        </View>
      </View>

      <View style={{marginTop: 10}}>
        <TRAKLIST_BUTTON text="LET'S BEGIN" color="#000" />

        <Text
          style={{
            textAlign: 'center',
            marginTop: 15,
            fontWeight: 'bold',
            fontSize: 12,
            color: '#808080',
          }}>
          DON'T HAVE AN ACCOUNT? REGISTER HERE
        </Text>
      </View>
    </View>
  );
}
