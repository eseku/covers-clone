import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PageHeader } from '~/components/common';
//imrn

const VitalsPage = () => {
  return (
    <View style={styles.wrapper}>
      <PageHeader title="Vitals" />
      <Text>Vitals</Text>
    </View>
  );
};

export default VitalsPage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
//rnstyle
