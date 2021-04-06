import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import Landing from '../2.organisms/home__landing';
import * as actions from '../../0.redux/actions/Actions';

import store from '../../0.redux/store';

export default function Traklist() {
  return (
    <View style={{backgroundColor: '#292929'}}>
      <Landing />
      <Button
        title="on click"
        onPress={() => {
          store.dispatch(actions.AUTH_STATE('auth test'));
        }}
      />
    </View>
  );
}
