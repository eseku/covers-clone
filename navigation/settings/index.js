import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { SettingsPage } from '~/screens/AppFront/';
import { SelfAssessment, FAQ as Faqs, TestingCenters } from '~/screens/Settings/';

const { Navigator, Screen } = createStackNavigator();

const NavigatorStack = () => {
  return (
    <Navigator
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS, gestureEnabled: true, cardOverlayEnabled: true }}
      mode={'modal'}
      initialRouteName="Settings"
    >
      <Screen options={{ headerShown: false }} name="Settings" component={SettingsPage} />
      <Screen options={{ headerShown: false }} name="Self Assessment" component={SelfAssessment} />
      <Screen options={{ headerShown: false }} name="FAQ" component={Faqs} />
      <Screen options={{ headerShown: false }} name="Testing Centers" component={TestingCenters} />
    </Navigator>
  );
};

export default NavigatorStack;
