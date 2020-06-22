import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Vitals from './vitals/';
import Reports from './reports/';
import Settings from './settings/';
import TabBarIcon from '../components/TabBarIcon';
import { Text } from 'react-native';
import { SettingsPage, ReportPage, VitalsPage } from '../screens/AppFront/';
import HomePage from './Home';
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
          title: ({ focused }) => <Text style={{ color: focused ? '#000' : 'grey' }}>Home</Text>,
          tabBarIcon: ({ focused }) => <TabBarIcon ion focused={focused} name="md-home" />,
        }}
      />

      <BottomTab.Screen
        name="Report"
        component={Reports}
        options={{
          title: ({ focused }) => <Text style={{ color: focused ? '#000' : 'grey' }}>Report</Text>,
          tabBarIcon: ({ focused }) => <TabBarIcon fontawesome focused={focused} name="send" />,
        }}
      />

      <BottomTab.Screen
        name="Vitals"
        component={Vitals}
        options={{
          title: ({ focused }) => <Text style={{ color: focused ? '#000' : 'grey' }}>Vitals</Text>,
          tabBarIcon: ({ focused }) => <TabBarIcon ion focused={focused} name="md-pulse" />,
        }}
      />

      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: ({ focused }) => <Text style={{ color: focused ? '#000' : 'grey' }}>Settings</Text>,
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
