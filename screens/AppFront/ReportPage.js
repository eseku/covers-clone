import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PageHeader } from '~/components/common';
//imrn

const ReportPage = () => {
  return (
    <View style={styles.wrapper}>
      <PageHeader title="Report" />
      <Text>Report</Text>
    </View>
  );
};

export default ReportPage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
//rnstyle
