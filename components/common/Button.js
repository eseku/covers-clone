import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Button = ({ title = 'Title', backgroundColor = '#817F82', onPress, ...rest }) => {
  return (
    <TouchableOpacity
      style={[styles.wrapper, { backgroundColor, ...rest }]}
      onPress={() => {
        onPress();
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
    paddingVertical: 20,
  },
  text: {
    color: '#fff',
  },
});
