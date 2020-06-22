import React from 'react';
import Modal from 'react-native-modal';
import { View, Text, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ProfileContent from '~/components/header/ProfileContent';

function Profile({ navigation }) {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity activeOpacity={1} onPress={() => Keyboard.dismiss()} style={styles.ModalStyle}>
        <View style={{ padding: 20, flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={styles.HeaderStyle}>Profile</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <AntDesign name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ paddingVertical: 10, flexGrow: 1, paddingTop: 50 }}>
            <ProfileContent navigation={navigation} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default Profile;

const styles = StyleSheet.create({
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
