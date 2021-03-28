import React from 'react';
import {View, Text} from 'react-native';
import TEXT from '../../0.atoms/text/label';
import INPUT from '../../0.atoms/inputs';

export default function Section({...props}) {
  return (
    <View>
      <View style={{marginBottom: 5}}>
        <TEXT text={props.label} color="#000" />
      </View>
      <View>
        <INPUT placeholder={props.type} />
      </View>
    </View>
  );
}
