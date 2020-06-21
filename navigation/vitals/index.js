import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { VitalsPage } from '~/screens/AppFront/';
import { PickerScreen } from '~/screens/Vitals/';

const { Navigator, Screen } = createStackNavigator();

const NavigatorStack = () => {
  return (
    <Navigator
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS, gestureEnabled: true, cardOverlayEnabled: true }}
      mode={'modal'}
      initialRouteName="Vitals"
    >
      <Screen options={{ headerShown: false }} name="Vitals" component={VitalsPage} />
      <Screen options={{ headerShown: false }} name="Log" component={PickerScreen} />
    </Navigator>
  );
};

export default NavigatorStack;
