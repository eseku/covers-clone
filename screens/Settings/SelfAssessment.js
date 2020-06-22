import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '~/constants/Colors';
import { Button } from '~/components/common/';

const SelfAssessment = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={{ paddingTop: 50, paddingBottom: 15, borderBottomWidth: 1, borderColor: Colors.divider }}>
        <Text style={styles.HeaderStyle}>Self Assessment</Text>
      </View>
      <View style={{ flexGrow: 1, paddingHorizontal: 20 }}>
        <View>
          <Notice
            title="Getting Started!"
            subtitle="This tool is intended to help you understand 
            what to do next about COVID-19. You'll answer a few questions about your symptoms,
             travel and contact you've had with others."
          />
          <Notice
            title="Note"
            subtitle="Recommendations provided by this tool do not constitute medical advice and
             should not be used to diagnose or treat medical conditions"
            extra="Let's all look out for each other by knowing our status, trying 
             not to infect others and reserving care for those in need"
          />
        </View>
        <Button
          backgroundColor="#000"
          title="Start Assessment ... "
          marginTop="auto"
          marginBottom={10}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};

const Notice = ({ title, subtitle, extra }) => {
  return (
    <View style={styles.noticeWrapper}>
      <View>
        <Text style={styles.noticeTitle}>{title}</Text>
      </View>
      <View>
        <Text style={styles.noticeSubtitle}>{subtitle}</Text>
        {extra && <Text>{extra}</Text>}
      </View>
    </View>
  );
};

export default SelfAssessment;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  HeaderStyle: {
    fontWeight: '600',
    fontSize: 40,
    paddingHorizontal: 20,
  },
  noticeWrapper: {
    paddingVertical: 15,
    // paddingHorizontal: 20,
  },
  noticeTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  noticeSubtitle: {
    paddingVertical: 10,
  },
  noticeExtra: {},
});
