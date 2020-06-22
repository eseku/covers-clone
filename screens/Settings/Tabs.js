import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from '~/constants/Colors';

const Tabs = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <ScrollView style={{ flex: 1 }}>
        <Tab
          title="Self Assessment"
          subtitle="Ascertain your covid-19 risk using our screening tool"
          navigation={navigation}
        />
        <Tab title="FAQs" subtitle="Get answers to Frequently Asked Questions" navigation={navigation} to="FAQ" />
        <Tab
          title="Testing Centers"
          subtitle="View testing centers nearby"
          navigation={navigation}
          to="Testing Centers"
        />
        <Tab
          title="Personal Details"
          subtitle="View and update your personal details"
          navigation={navigation}
          to="Profile"
        />
        <Tab title="Audio" subtitle="Listen to audio" navigation={navigation} />
        <Tab title="Privacy Policy" subtitle="View our privacy policy" navigation={navigation} />
        <Tab title="Share" subtitle="Share this app with friends and family" navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default Tabs;

const Tab = (props) => {
  return (
    <TouchableOpacity
      style={styles.tabWrapper}
      onPress={() => props.navigation.navigate(props.to || 'Self Assessment')}
    >
      <View style={styles.tabLeft}>
        <Text style={styles.titleStyle} numberOfLines={1} ellipsizeMode="tail">
          {props.title}
        </Text>
        <Text>{props.subtitle}</Text>
      </View>
      <View style={styles.tabRight}>
        <AntDesign name="right" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  tabWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderColor: Colors.divider,
  },
  tabLeft: {
    flex: 9.5,
    paddingLeft: 20,
  },
  tabRight: {
    flex: 0.5,
    paddingRight: 20,
  },
  titleStyle: {
    fontWeight: '700',
    fontSize: 20,
  },
});
