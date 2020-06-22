import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import BottomTabNavigator from '../BottomTabNavigator';
import { Profile } from '../../screens/AppFront';

const { Navigator, Screen } = createStackNavigator();

const index = () => {
  return (
    <Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        gestureEnabled: true,
        cardOverlayEnabled: true,
        headerShown: false,
      }}
    >
      <Screen name="Root" component={BottomTabNavigator} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};

export default index;
