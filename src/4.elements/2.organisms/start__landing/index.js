import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import styles from './styles';

import TRAKLIST_TEXT from '../../0.atoms/text/statement';

export default function Landing() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safe_container}>
        <View style={{paddingRight: 30}}>
          <TRAKLIST_TEXT text="don't miss out.." textAlign="right" />
          <TRAKLIST_TEXT text="...join in the fun!" textAlign="right" />
        </View>
      </SafeAreaView>
    </View>
  );
}
