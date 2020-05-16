import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, SafeAreaView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Header = ({ title = 'set title' }) => {
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <View style={styles.TopViewStyle}>
          <View>
            <TouchableOpacity>
              <Image source={require('../../assets/images/profile.png')} style={styles.ProfileImageStyle} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <FontAwesome name="bell-o" size={30} color="black" />
            </TouchableOpacity>
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
    borderBottomColor: '#DCDEE1',
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
