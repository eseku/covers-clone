import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Section = ({ title, subtitle, list = [], extras, addressinfo }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.TitleStyle}>{title || 'Background'}</Text>
      <View style={styles.SubtitleViewStyle}>
        <Text style={styles.SubtitleStyle}>
          {subtitle ||
            'Citizens are advised to provide accurate information on this application to support the government and health services in managing and accurately containing the spread of the coronavirus.'}
        </Text>
        {list.map((item, key) => {
          return (
            <Text key={key} style={styles.ListItemStyle}>
              - {item}
            </Text>
          );
        })}
        {extras && <Text style={styles.ExtraStyle}>{extras}</Text>}
        {addressinfo && (
          <View style={styles.AddressStyle}>
            <Text style={styles.AddressTextStyle}>{addressinfo.name}</Text>
            <Text style={styles.AddressTextStyle}>{addressinfo.street}</Text>
            <Text style={styles.AddressTextStyle}>{addressinfo.town}</Text>
            <Text style={styles.AddressTextStyle}>{addressinfo.country}</Text>
            <Text style={styles.AddressTextStyle}>{addressinfo.phone}</Text>
            <Text style={styles.AddressTextStyle}>{addressinfo.email}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingVertical: 10,
  },
  TitleStyle: {
    fontSize: 20,
    fontWeight: '700',
  },
  SubtitleStyle: {
    fontSize: 13,
    fontWeight: '500',
  },
  ListItemStyle: {
    fontSize: 13,
    fontWeight: '500',
  },
  SubtitleViewStyle: {
    paddingVertical: 5,
  },
  ExtraStyle: {
    fontSize: 13,
    fontWeight: '500',
    paddingTop: 15,
  },
  AddressTextStyle: {
    fontSize: 13,
    fontWeight: '500',
    textAlign: 'right',
  },
  AddressStyle: {
    paddingVertical: 10,
  },
});
