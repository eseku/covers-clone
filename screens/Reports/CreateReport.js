import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ReportContent from '../../components/reports/ReportContent';

const CreateReport = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity activeOpacity={1} onPress={() => Keyboard.dismiss()} style={{ padding: 20, flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={styles.HeaderStyle}>Make Report</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ paddingVertical: 10, flexGrow: 1, paddingTop: 50 }}>
          <ReportContent navigation={navigation} />
        </View>
      </TouchableOpacity>
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
  ProfileImageStyle: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  ModalStyle: {
    flex: 1,
  },
});
