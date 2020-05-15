import React from 'react';
import { View, Keyboard, StyleSheet, ImageBackground, StatusBar, Platform, TouchableOpacity } from 'react-native';
import { Caption, Form } from '../../components/getstarted/';

const imagesource = require('~/assets/images/covid.jpeg');

const GetStartedPage = (props) => {
  console.log();
  return (
    <View style={styles.wrapper}>
      {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
      <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={() => Keyboard.dismiss()}>
        <ImageBackground source={imagesource} style={styles.image}>
          <View style={styles.inner}>
            <Caption />
            <Form navigation={props.navigation} />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default GetStartedPage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 25,
  },
});
