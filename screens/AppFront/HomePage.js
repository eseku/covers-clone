import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { PageHeader, Spinner } from '~/components/common';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <PageHeader title="Home" navigation={navigation} />
      <View style={styles.content}>
        <Spinner />
      </View>
    </View>
  );
};

export default HomePage;

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
