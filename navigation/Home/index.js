import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { HomePage, Profile } from '~/screens/AppFront/';
const { Navigator, Screen } = createStackNavigator();

const index = () => {
  return (
    <Navigator
      headerMode="none"
      mode="modal"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        gestureEnabled: true,
        cardOverlayEnabled: true,
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Screen name="Home" component={HomePage} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};

export default index;
