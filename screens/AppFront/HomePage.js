import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { PageHeader } from '~/components/common';
import { Home } from '../../components/home/';
import Lottie from 'lottie-react-native';
import loader from '~/assets/images/loader.json';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <PageHeader title="Home" navigation={navigation} />
      <View style={styles.content}>
        <Home />
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
  },
});
