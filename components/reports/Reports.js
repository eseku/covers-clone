import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Alert, ScrollView } from 'react-native';
import { AppContext } from '~/context';
import reports from '~/assets/images/reports.json';
import Lottie from 'lottie-react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from '~/constants/Colors';

const Reports = ({ navigation }) => {
  const { cases } = useContext(AppContext);
  return (
    <>
      {cases.length === 0 && <EmptyContent navigation={navigation} />}
      {cases.length !== 0 && <Cases navigation={navigation} />}
    </>
  );
};

const EmptyContent = ({ navigation }) => {
  return (
    <View style={{ alignItems: 'center', flex: 1 }}>
      <View>
        <Lottie source={reports} autoPlay={true} loop={true} style={{ width: 300, height: 300, marginVertical: 15 }} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.messageStyle}>You have not made any case reports</Text>
        <TouchableOpacity
          style={styles.logStyle}
          onPress={() => {
            navigation.navigate('Create Report');
          }}
        >
          <Text style={{ alignSelf: 'center' }}>Make Case Report</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Cases = ({ navigation }) => {
  const { cases } = useContext(AppContext);

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      {cases.map((el, index) => {
        return (
          <View
            key={index}
            style={{
              paddingVertical: 25,
              paddingHorizontal: 20,
              borderBottomWidth: 1,
              borderColor: Colors.divider,
            }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View>
                <Text>{el.behalf}</Text>
              </View>
              <View>
                <Text>{el.date.format('ddd MMM DD YYYY')}</Text>
              </View>
            </View>
            <View style={{ paddingTop: 5 }}>
              <View>
                <Text numberOfLines={1} ellipsizeMode="tail">
                  {el.description.trim()}
                </Text>
              </View>
              <View>
                <Text>{el.contact}</Text>
              </View>
            </View>
          </View>
        );
      })}
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          navigation.navigate('Create Report');
        }}
      >
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Reports;

const styles = StyleSheet.create({
  logStyle: {
    borderWidth: 1,
    borderStyle: 'dashed',
    paddingHorizontal: 30,
    paddingVertical: 18,
    borderRadius: 5,
    width: '70%',
    alignSelf: 'center',
  },
  messageStyle: {
    paddingVertical: 20,
    fontSize: 12,
  },
  logInnerTextStyle: {
    fontSize: 12,
  },
  buttonContainer: {
    backgroundColor: '#000',
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    position: 'absolute',
    right: 15,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 20,
    zIndex: 1,
    shadowColor: '#C8CFD0',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
});
