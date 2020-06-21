import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, ActivityIndicator } from 'react-native';
import { Button } from '../common';

const Form = (props) => {
  const [number, setNumber] = useState('');
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.wrapper}>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10,
        }}
      >
        <TextInput keyboardType="number-pad" value={number} onChangeText={validateNumber} style={styles.input} />
        <View style={styles.info}>
          <Text>Phone Number</Text>
        </View>
      </View>
      <View>
        <Button
          title={loading ? <ActivityIndicator size="small" animating={true} /> : 'Phone Number'}
          disabled={!valid}
          onPress={() => {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              props.navigation.navigate('verification');
            }, 2000);
          }}
          backgroundColor={valid ? '#53CC7A' : '#817F82'}
        />
      </View>
    </View>
  );

  function validateNumber(input) {
    if (typeof input === 'string' && input.length <= 10) {
      setNumber(input);
      if (input.length === 10) setValid(true);
      else setValid(false);
    }
  }
};

export default Form;

const styles = StyleSheet.create({
  wrapper: {
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
