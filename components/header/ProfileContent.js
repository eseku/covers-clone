import React from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CheckBox, Button } from '../common';
import CountrySelector from './CountrySelector';

const ProfileContent = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <KeyboardAwareScrollView>
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
          <View
            style={{
              maxHeight: 120,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 20,
              width: '100%',
            }}
          >
            <View style={{ width: '48%' }}>
              <CountrySelector />
            </View>
            <View style={{ width: '48%' }}>
              <CountrySelector />
            </View>
          </View>
        </View>
        <View>
          <Text style={{ fontWeight: '900', paddingVertical: 5, fontSize: 15 }}>Medical Professional Information</Text>
          <Text>Applicable if you are a health worker</Text>
          <Text style={{ paddingVertical: 10 }}>Health License Number</Text>
          <TextInput style={styles.AgeTextInputStyle} />
        </View>
      </KeyboardAwareScrollView>
      <Button
        marginTop="auto"
        backgroundColor="#000"
        title="Update Profile"
        onPress={() => {
          setTimeout(() => {
            navigation.goBack();
            Alert.alert('Success', 'Your profile details have been saved');
          }, 1000);
        }}
      />
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
