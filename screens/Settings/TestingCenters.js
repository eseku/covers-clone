import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';
import * as WebBrowser from 'expo-web-browser';
import Colors from '~/constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';

const centers = [
  {
    name: 'Ngouchi Memorial Testing Center',
    directions:
      'https://www.google.com/maps/dir//Noguchi+Memorial+Institute+for+Medical+Research,+Accra/@5.6347583,-0.182984,15z/data=!4m16!1m6!3m5!1s0x0:0xce189635a19041bd!2sNoguchi+Memorial+Institute+for+Medical+Research!8m2!3d5.6347583!4d-0.182984!4m8!1m0!1m5!1m1!1s0xfdf9b7990029f97:0xce189635a19041bd!2m2!1d-0.182984!2d5.6347583!3e2',
    city: 'Accra, Ghana',
  },
];

const TestingCenters = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 20,
          paddingHorizontal: 20,
          //   borderWidth: 1,
        }}
      >
        <Text style={styles.HeaderStyle}>Testing Centers</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{ flexGrow: 1 }}>
          {centers.map((center, index) => {
            return <Center key={index} {...center} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const Center = ({ name, directions, city }) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: Colors.divider,
        paddingHorizontal: 20,
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
        <Text style={{ fontWeight: '700' }}>{name}</Text>
        <Text>{moment().format('ddd, MMM')}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>{city}</Text>
        {directions && (
          <TouchableOpacity activeOpacity={1} onPress={() => WebBrowser.openBrowserAsync(directions)}>
            <Text style={{ color: 'gold' }}>Get Directions</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TestingCenters;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  HeaderStyle: {
    fontWeight: '600',
    fontSize: 40,
  },
});
