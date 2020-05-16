import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Button } from '../common';

const Form = (props) => {
  return (
    <View style={styles.wrapper}>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10,
        }}
      >
        <TextInput keyboardType="number-pad" style={styles.input} />
        <View style={styles.info}>
          <Text>Phone Number</Text>
        </View>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => {
            props.navigation.navigate('verification');
          }}
        />
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  wrapper: {
    // borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 50,
  },
  input: {
    flex: 4,
    width: '100%',
    backgroundColor: '#f4f6fa',
    height: 50,
    color: '#000',
    paddingHorizontal: 10,
  },
  info: {
    backgroundColor: '#f4f6fa',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
