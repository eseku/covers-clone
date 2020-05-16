import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { PageHeader } from '~/components/common';

const HomePage = () => {
  return (
    <View style={styles.wrapper}>
      <PageHeader title="Home" />
      <Text>Home</Text>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
