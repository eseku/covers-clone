import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { CheckBox, Button } from '../common';
import { AppContext } from '~/context';
import moment from 'moment';

const ReportContent = ({ navigation }) => {
  const { addCase } = useContext(AppContext);
  console.log(addCase);
  const [caseobj, setCase] = useState({
    behalf: 'Self',
    location: '',
    landmark: '',
    contact: '',
    description: '',
    date: moment(),
  });
  return (
    <View style={styles.wrapper}>
      <Text style={styles.SubHeaderTextStyle}>Who are you reporting?</Text>
      <View style={styles.CheckboxViewStyle}>
        <CheckBox label1="Self" label2="Other Individual" />
      </View>

      <View>
        <Text style={[styles.AgeTextStyle, styles.SubHeaderTextStyle]}>Location or Digital Address</Text>
        <TextInput
          style={styles.AgeTextInputStyle}
          placeholder="eg. GA-492-74"
          placeholderTextColor="#E0E0E0"
          onChangeText={(text) => {
            setCase({
              ...caseobj,
              location: text,
            });
          }}
        />
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flex: 5 }}>
          <Text style={[styles.AgeTextStyle, styles.SubHeaderTextStyle]}>Nearest Landmark</Text>
          <TextInput
            style={styles.AgeTextInputStyle}
            placeholder="eg. GA-492-74"
            placeholderTextColor="#E0E0E0"
            onChangeText={(text) => {
              setCase({
                ...caseobj,
                landmark: text,
              });
            }}
          />
        </View>
        <View style={{ flex: 4, marginLeft: 5 }}>
          <Text style={[styles.AgeTextStyle, styles.SubHeaderTextStyle]}>Alternate Contact</Text>
          <TextInput
            style={styles.AgeTextInputStyle}
            keyboardType="numeric"
            placeholder="Contact Number"
            placeholderTextColor="#E0E0E0"
            onChangeText={(text) => {
              setCase({
                ...caseobj,
                contact: text,
              });
            }}
          />
        </View>
      </View>

      <View style={styles.TravelHistoryViewStyle}>
        <Text style={{ fontWeight: '900', paddingVertical: 5, fontSize: 15 }}>Description</Text>
        <Text>Select the last two countries you have visited (If Applicable)</Text>
        <View>
          <TextInput
            style={[styles.AgeTextInputStyle, { height: 150, marginTop: 10 }]}
            multiline={true}
            numberOfLines={80}
            placeholder="Say Something"
            placeholderTextColor="#E0E0E0"
            onChangeText={(text) => {
              setCase({
                ...caseobj,
                description: text,
              });
            }}
          />
        </View>
      </View>
      <Button
        backgroundColor="#000"
        title="Report Case"
        marginTop="auto"
        onPress={() => {
          addCase(caseobj);
          navigation.goBack();
          Alert.alert('Success', 'Case Added Successfully');
        }}
      />
    </View>
  );
};

export default ReportContent;

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
