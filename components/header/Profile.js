import React from 'react';
import Modal from 'react-native-modal';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, Image, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ProfileContent from './ProfileContent';

const screenHeight = Math.round(Dimensions.get('screen').height);

export default function () {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setShowModal(!showModal);
        }}
      >
        <Image source={require('../../assets/images/profile.png')} style={styles.ProfileImageStyle} />
        <Modal
          onBackdropPress={() => setShowModal(!showModal)}
          onSwipeComplete={() => setShowModal(!showModal)}
          isVisible={showModal}
          hideModalContentWhileAnimating
          style={{ margin: 0, justifyContent: 'flex-end' }}
        >
          <TouchableOpacity activeOpacity={1} onPress={() => Keyboard.dismiss()} style={styles.ModalStyle}>
            <View style={{ padding: 20, flex: 1 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={styles.HeaderStyle}>Profile</Text>
                <TouchableOpacity
                  onPress={() => {
                    setShowModal(false);
                  }}
                >
                  <AntDesign name="close" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View style={{ paddingVertical: 10, flexGrow: 1, paddingTop: 50 }}>
                <ProfileContent />
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  HeaderStyle: {
    fontWeight: '700',
    fontSize: 40,
  },
  ProfileImageStyle: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  ModalStyle: {
    marginTop: 50,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    height: screenHeight / 1.05,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
