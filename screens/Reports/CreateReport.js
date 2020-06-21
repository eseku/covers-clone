import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CreateReport = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerStyle}>
        <View>
          <Text style={styles.headerTextStyle}>Log Symptoms</Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="close" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Text>Create</Text>
    </View>
  );
};

export default CreateReport;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  HeaderStyle: {
    fontWeight: '700',
    fontSize: 40,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
});
