import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import TRAKLIST_BUTTON from '../../0.atoms/buttons/form';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function AltLogin() {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.section,
          {
            backgroundColor: '#1DB954',
          },
        ]}>
        <View style={styles.button_text}>
          <TRAKLIST_BUTTON text="SIGN IN WITH" color="#1DB954" />
        </View>
        <View style={{flex: 2, alignItems: 'center'}}>
          <TouchableWithoutFeedback onPress={() => alert('hi')}>
            <FontAwesome name="spotify" size={25} color="#fff" />
          </TouchableWithoutFeedback>
        </View>
      </View>

      <View
        style={[
          styles.section,
          {
            backgroundColor: '#FC3C44',
          },
        ]}>
        <View style={styles.button_text}>
          <TRAKLIST_BUTTON text="SIGN IN WITH" color="#FC3C44" />
        </View>
        <View style={styles.button_icon}>
          <TouchableWithoutFeedback onPress={() => alert('hi')}>
            <FontAwesome name="apple" size={25} color="#fff" />
          </TouchableWithoutFeedback>
        </View>
      </View>

      <View
        style={[
          styles.section,
          {
            backgroundColor: '#FE5000',
          },
        ]}>
        <View style={styles.button_text}>
          <TRAKLIST_BUTTON text="SIGN IN WITH" color="#FE5000" />
        </View>
        <View style={styles.button_icon}>
          <TouchableWithoutFeedback onPress={() => alert('hi')}>
            <FontAwesome name="soundcloud" size={25} color="#fff" />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}
