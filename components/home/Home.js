import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';
import loader from '~/assets/images/loader.json';
import { useQuery } from '@apollo/react-hooks';
import { statistics } from '~/queries/stats/query';
import Stats from './Stats';

const Home = () => {
  const { loading, error, data } = useQuery(statistics);

  if (loading) return <Loading />;
  if (error) return <p>Error :(</p>;
  return <Stats results={data.country.result} />;
};

const Loading = () => (
  <View style={styles.wrapper}>
    <Lottie source={loader} autoPlay={true} loop={true} style={{ height: 150, marginVertical: 15 }} />
  </View>
);
export default Home;

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
