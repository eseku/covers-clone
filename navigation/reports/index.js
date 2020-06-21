import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { ReportPage } from '~/screens/AppFront/';
import { CreateReport } from '~/screens/Reports/';

const { Navigator, Screen } = createStackNavigator();

const NavigatorStack = () => {
  return (
    <Navigator
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS, gestureEnabled: true, cardOverlayEnabled: true }}
      mode={'modal'}
      initialRouteName="Case Reports"
    >
      <Screen options={{ headerShown: false }} name="Case Reports" component={ReportPage} />
      <Screen options={{ headerShown: false }} name="Create Report" component={CreateReport} />
    </Navigator>
  );
};

export default NavigatorStack;
