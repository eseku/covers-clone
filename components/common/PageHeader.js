import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Notifications, Profile } from '../header/';

const Header = ({ title = 'set title', navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <View style={styles.TopViewStyle}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image source={require('../../assets/images/profile.png')} style={styles.ProfileImageStyle} />
            </TouchableOpacity>
          </View>
          <View>
            <Notifications />
          </View>
        </View>
        <View style={styles.BottomViewStyle}>
          <Text style={styles.TitleStyle}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#f4f6fa',
  },
  text: {
    color: '#000',
  },
  TopViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  BottomViewStyle: {
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  TitleStyle: {
    fontSize: 40,
    fontWeight: '700',
  },
  ProfileImageStyle: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
