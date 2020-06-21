import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PageHeader } from '~/components/common';
import { Vitals } from '~/components/vitals/';
//imrn

const VitalsPage = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <PageHeader title="Vitals" />
      <View style={styles.content}>
        <Vitals navigation={navigation} />
      </View>
    </View>
  );
};

export default VitalsPage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 1,
  },
});
//rnstyle
