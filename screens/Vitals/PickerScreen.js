import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { AppContext } from '~/context/';
import { LogUnit } from '~/components/vitals/';
import Button from '~/components/common/Button';

const PickerScreen = ({ navigation }) => {
  const { currentLog, addLog } = useContext(AppContext);

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

      <ScrollView style={styles.body} contentContainerStyle={styles.innerBody}>
        <LogUnit title="Dry Cough" />
        <LogUnit title="Tiredness" />
        <LogUnit title="Sore Throat" />
        <LogUnit title="Fever" />
        <LogUnit title="Aches and Pains" name="Ache" />
        <LogUnit title="Shortness of Breath" name="Breath Shortness" />
        <Button
          backgroundColor="#748098"
          borderRadius={5}
          title="Log Vitals"
          marginVertical={10}
          onPress={() => {
            addLog();
            Alert.alert('Success', 'Your vitals have been logged successfully');
            navigation.goBack();
          }}
        />
      </ScrollView>
    </View>
  );
};

export default PickerScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  },
  headerStyle: {
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  headerTextStyle: {
    fontSize: 35,
  },
  body: {
    flexGrow: 1,
  },
  innerBody: {
    paddingBottom: 100,
    paddingHorizontal: 25,
  },
});
