import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { AppContext } from '~/context';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import Colors from '~/constants/Colors';
const screenHeight = Math.round(Dimensions.get('screen').height);

const CountrySelector = () => {
  const { countryList } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCode, setSelectedCode] = useState('');
  return (
    <View>
      <TouchableOpacity
        onPress={() => setShowModal(!showModal)}
        style={{
          width: '100%',
          height: '100%',
          borderWidth: 1,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={{ alignItems: 'center' }}>
          <Text style={{ fontSize: 50 }}>{cCodeToEmoji(selectedCode)}</Text>
          <Text style={{ fontSize: 20 }}>{selectedCountry}</Text>
        </View>
      </TouchableOpacity>
      <Modal
        onBackdropPress={() => setShowModal(!showModal)}
        onSwipeComplete={() => setShowModal(!showModal)}
        isVisible={showModal}
        hideModalContentWhileAnimating
        style={{ margin: 0, justifyContent: 'flex-end' }}
      >
        <View
          style={{
            marginTop: 50,
            paddingHorizontal: 20,
            backgroundColor: 'white',
            height: screenHeight,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            paddingTop: 50,
          }}
        >
          <TouchableOpacity onPress={() => setShowModal(false)}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          <ScrollView>
            {Object.keys(countryList).map((item, index) => {
              console.log(item);
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSelectedCountry(countryList[item]);
                    setSelectedCode(item);
                    setShowModal(false);
                  }}
                  style={{ paddingVertical: 20, borderBottomWidth: 1, borderColor: Colors.divider }}
                  key={index}
                >
                  <Text style={{ fontSize: 25 }}>{countryList[item]}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

function cCodeToEmoji(cCode) {
  return cCode.replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));
}

export default CountrySelector;

const styles = StyleSheet.create({
  wrapper: {},
});
