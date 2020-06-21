import React from 'react';
import Modal from 'react-native-modal';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import moment from 'moment';

const screenHeight = Math.round(Dimensions.get('screen').height);

const notifications = [
  { message: 'Stay at home', time: moment() },
  { message: 'Hi Message', time: moment() },
  { message: 'testing', time: moment() },
];

function Notification(props) {
  return (
    <View
      style={{
        paddingVertical: 30,
        borderBottomWidth: 1,
        borderColor: '#f4f6fa',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Text style={styles.NotificationMessageStyle}>{props.message}</Text>
      <Text style={styles.NotificationTimeStyle}>{props.time.fromNow()}</Text>
    </View>
  );
}

export default function () {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setShowModal(!showModal);
        }}
      >
        <FontAwesome name="bell-o" size={30} color="black" />
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
              height: screenHeight / 1.13,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          >
            <View style={{ padding: 20, flex: 1 }}>
              <Text style={styles.HeaderStyle}>Notifications</Text>
              <View style={{ paddingVertical: 10, flexGrow: 1 }}>
                <ScrollView contentContainerStyle={{ marginBottom: 30 }} showsVerticalScrollIndicator={false}>
                  {notifications.map((el, key) => {
                    return <Notification {...el} key={key} />;
                  })}
                </ScrollView>
              </View>
            </View>
          </View>
        </Modal>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  HeaderStyle: {
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
  },
  NotificationMessageStyle: {
    fontSize: 20,
  },
  NotificationTimeStyle: {
    fontSize: 12,
  },
});
