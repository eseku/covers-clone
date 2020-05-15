import React from 'react';
import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button as ActionButton } from '~/components/common/';

const Information = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <KeyboardAwareScrollView
        style={styles.KeyboardAwareScrollViewStyle}
        contentContainerStyle={styles.KeyboardAwareScrollViewContentStyle}
      >
        <View>
          <View style={styles.TextViewStyle}>
            <Text style={[styles.TextStyle, styles.HeaderStyle]}>Verification PIN</Text>
            <Text style={[styles.TextStyle]}>Enter the verification code</Text>
            <Text style={[styles.TextStyle]}>we just sent you on</Text>
            <Text style={[styles.TextStyle]}>0540710554</Text>
          </View>
          <View style={styles.InputViewStyle}>
            <View>
              <TextInput style={styles.InputStyle} keyboardType="number-pad" />
              <ActionButton
                title="Submit Code"
                backgroundColor="#000"
                onPress={() => navigation.navigate('generalinformation')}
              />
            </View>

            <View style={{ paddingVertical: 30 }}>
              <Text style={styles.TextStyle}>Have not received your code?</Text>
              <TouchableOpacity>
                <Text style={{ paddingVertical: 15, textAlign: 'center', fontWeight: 'bold' }}>Resend Code</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Information;
const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flex: 1,
  },
  TextStyle: {
    textAlign: 'center',
  },
  KeyboardAwareScrollViewStyle: {
    flex: 1,
  },
  KeyboardAwareScrollViewContentStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  HeaderStyle: {
    fontWeight: 'bold',
    fontSize: 19,
    paddingBottom: 25,
  },
  InputStyle: {
    width: '100%',
    borderBottomWidth: 2,
    marginBottom: 20,
    paddingVertical: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  TextViewStyle: {
    paddingBottom: 60,
  },
  InputViewStyle: {},
});
