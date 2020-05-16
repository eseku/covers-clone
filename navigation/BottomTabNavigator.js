import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import { HomePage, SettingsPage, ReportPage, VitalsPage } from '../screens/AppFront/';
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomePage}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon ion focused={focused} name="md-home" />,
        }}
      />

      <BottomTab.Screen
        name="Report"
        component={ReportPage}
        options={{
          title: 'Report',
          tabBarIcon: ({ focused }) => <TabBarIcon fontawesome focused={focused} name="send" />,
        }}
      />

      <BottomTab.Screen
        name="Vitals"
        component={VitalsPage}
        options={{
          title: 'Vitals',
          tabBarIcon: ({ focused }) => <TabBarIcon ion focused={focused} name="md-pulse" />,
        }}
      />

      <BottomTab.Screen
        name="Settings"
        component={SettingsPage}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => <TabBarIcon ion focused={focused} name="ios-settings" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
  }
}
