import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { AppContext } from '~/context';
import { AntDesign } from '@expo/vector-icons';
import cardio from '~/assets/images/cardio.json';
import Lottie from 'lottie-react-native';
import VitalRecord from './VitalRecord';
import { ScrollView } from 'react-native-gesture-handler';

const Vitals = ({ navigation }) => {
  const { logs, clearCurrLog } = useContext(AppContext);
  console.log(Lottie);

  return (
    <>
      {logs.length === 0 && <EmptyContent navigation={navigation} clear={clearCurrLog} />}
      {logs.length !== 0 && <LogContent navigation={navigation} clear={clearCurrLog} />}
    </>
  );
};

const EmptyContent = ({ navigation, clear }) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <Lottie
          source={cardio}
          autoPlay={true}
          loop={true}
          style={{ height: 200, marginLeft: 60, marginVertical: 15 }}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.messageStyle}>You have not logged your vitals yet...</Text>
        <TouchableOpacity
          style={styles.logStyle}
          onPress={() => {
            clear();
            navigation.navigate('Log');
          }}
        >
          <Text style={{ alignSelf: 'center' }}>Log Vitals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const LogContent = ({ navigation, clear }) => {
  const { logs } = useContext(AppContext);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ paddingHorizontal: 50 }}>
          {logs.map((log, id) => {
            return <VitalRecord key={id} log={log} />;
          })}
        </View>
      </ScrollView>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => {
          clear();
          navigation.navigate('Log');
        }}
      >
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};
export default Vitals;

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
