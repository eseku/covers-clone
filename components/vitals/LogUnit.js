import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '~/constants/Colors';
import { AppContext } from '~/context';

const LogUnit = ({ title, name }) => {
  const values = ['None', 'Mild', 'Mid', 'Semi', 'High'];
  const [selectedValue, setSelectedValue] = useState(0);
  return (
    <View style={styles.wrapper}>
      <View style={styles.upperView}>
        <Text>{title}</Text>
      </View>
      <View style={styles.lowerView}>
        {values.map((val, index) => {
          return (
            <DisplayNumber
              value={val}
              id={index}
              key={index}
              selectValue={selectValue}
              selectedValue={selectedValue}
              keyData={name || title}
            />
          );
        })}
      </View>
    </View>
  );

  function selectValue(valueSelect) {
    setSelectedValue(valueSelect);
  }
};

function DisplayNumber({ value, id, selectValue, selectedValue, keyData }) {
  const { setCurrentLogAbs } = useContext(AppContext);
  //   console.log(setCurrentLogAbs);

  return (
    <View style={styles.unit}>
      <TouchableOpacity
        style={[
          styles.button,
          id === selectedValue && {
            backgroundColor: '#A8AFC1',
            borderColor: '#A8AFC1',
          },
        ]}
        onPress={() => {
          selectValue(id);
          setCurrentLogAbs(keyData, id);
        }}
      >
        <Text
          style={[
            styles.buttonText,
            id === selectedValue && {
              color: '#fff',
            },
          ]}
        >
          {id}
        </Text>
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    shadowColor: '#C8CFD0',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 19,
  },
  upperView: {
    borderBottomWidth: 1,
    borderColor: Colors.divider,
    paddingVertical: 10,
  },
  lowerView: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingVertical: 15,
  },
  button: {
    borderWidth: 1,
    borderRadius: 45 / 2,
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
  unit: {
    alignItems: 'center',
  },
  desc: {
    paddingVertical: 5,
  },
});

export default LogUnit;
