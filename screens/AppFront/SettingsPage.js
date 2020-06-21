import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PageHeader } from '~/components/common';
//imrn

const SettingsPage = () => {
  return (
    <View style={styles.wrapper}>
      <PageHeader title="Settings" />
      <View style={styles.content}>
        <Text>Settings</Text>
      </View>
    </View>
  );
};

export default SettingsPage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
//rnstyle
