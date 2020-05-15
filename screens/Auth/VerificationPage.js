import React from 'react';
import { View, StyleSheet, Text, Platform, StatusBar, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Information } from '~/components/verification/';

const VerificationPage = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backViewStyle}>
        <AntDesign name="left" size={24} color="black" style={styles.iconStyle} />
        <Text style={styles.iconText}>Change phone</Text>
      </TouchableOpacity>

      <View style={styles.contentViewStyle}>
        <View style={styles.contentViewInnerStyle}>
          <Information navigation={navigation} />
        </View>
      </View>
    </View>
  );
};

export default VerificationPage;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  backViewStyle: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconStyle: {
    marginRight: 5,
  },
  iconText: {
    fontSize: 15,
  },
  contentViewStyle: {
    flex: 15,
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  contentViewInnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
