import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PageHeader } from '~/components/common';
import { Reports } from '~/components/reports';

const ReportPage = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <PageHeader title="Case Reports" navigation={navigation} />

      <View style={styles.content}>
        <Reports navigation={navigation} />
      </View>
    </View>
  );
};

export default ReportPage;

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
