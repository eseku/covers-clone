import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PageHeader } from '~/components/common';
//imrn

const SettingsPage = () => {
  return (
    <View style={styles.wrapper}>
      <PageHeader title="Settings" />
      <Text>Settings</Text>
    </View>
  );
};

export default SettingsPage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
//rnstyle
