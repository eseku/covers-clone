import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import RadioButtons from 'radio-buttons-react-native';
import { AntDesign } from '@expo/vector-icons';
import { CheckBox } from '../common';

const ProfileContent = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.SubHeaderTextStyle}>Personal Details</Text>
      <View>
        <Text style={styles.AgeTextStyle}>Enter Age</Text>
        <TextInput style={styles.AgeTextInputStyle} keyboardType="numeric" />
      </View>
      <Text style={[styles.SubHeaderTextStyle, { paddingTop: 15 }]}>Select Your Gender</Text>
      <View style={styles.CheckboxViewStyle}>
        <CheckBox label1="Male" label2="Female" />
      </View>
      <View style={styles.TravelHistoryViewStyle}>
        <Text style={{ fontWeight: '900', paddingVertical: 5, fontSize: 15 }}>Travel History</Text>
        <Text>Select the last two countries you have visited (If Applicable)</Text>
        <View>
          <View></View>
          <View></View>
        </View>
      </View>
    </View>
  );
};

export default ProfileContent;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  SubHeaderTextStyle: {
    fontWeight: '700',
  },
  AgeTextStyle: {
    paddingVertical: 15,
  },
  AgeTextInputStyle: {
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: '100%',
    borderColor: '#DCDEE1',
  },
  CheckboxViewStyle: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  TravelHistoryViewStyle: {
    paddingVertical: 10,
  },
});
