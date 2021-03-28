import React from 'react';
import {View, Button} from 'react-native';
import TRAKLIST_FORM_SECTION from '../../1.molecules/form_section';
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

      <Button title="Let's Begin" />
    </View>
  );
}
