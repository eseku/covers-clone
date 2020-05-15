import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { GetStartedPage, VerificationPage, GeneralInformationPage } from '~/screens/Auth/';
const { Navigator, Screen } = createStackNavigator();

const index = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Screen name="getstarted" component={GetStartedPage} />
      <Screen name="verification" component={VerificationPage} />
      <Screen name="generalinformation" component={GeneralInformationPage} />
    </Navigator>
  );
};

export default index;
