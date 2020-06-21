import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const VitalRecord = ({ log }) => {
  let [date, ...rest] = Object.keys(log);
  const colorScheme = ['#88FEC2', '#87E6F8', '#C76CF7', '#F67D0A', '#D70007'];
  const wording = ['None', 'Mild', 'Mid', 'Semi', 'High'];

  return (
    <View>
      <Text style={{ paddingVertical: 10 }}>{log[date].format('ddd MMM D YYYY')}</Text>

      <View style={styles.wrapper}>
        {rest.map((condition, index) => (
          <View
            key={index}
            style={[
              styles.card,
              { backgroundColor: colorScheme[log[condition]], borderColor: colorScheme[log[condition]] },
            ]}
          >
            <Text style={styles.title}>{condition}</Text>
            <Text style={styles.value}>{log[condition]}</Text>
            <Text style={styles.wording}>{wording[log[condition]]}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default VitalRecord;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: Colors.divider,
    paddingVertical: 10,
  },
  card: {
    width: '32%',
    height: 100,
    borderWidth: 1,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  value: {
    fontSize: 23,
    color: '#fff',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
  },
  wording: {
    color: '#fff',
  },
});
