import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CheckBox = ({ label1, label2 }) => {
  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.circle} onPress={() => setSelected(0)}>
        <AntDesign name="checkcircle" size={24} color={selected === 0 ? 'black' : '#D3D3D3'} />
        <Text style={{ marginLeft: 5 }}>{label1}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.circle} onPress={() => setSelected(1)}>
        <AntDesign name="checkcircle" size={24} color={selected === 1 ? 'black' : '#D3D3D3'} />
        <Text style={{ marginLeft: 5 }}>{label2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  circle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
});
