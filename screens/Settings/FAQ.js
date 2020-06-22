import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Colors from '~/constants/Colors';
import { AntDesign } from '@expo/vector-icons';

const FAQ = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}
      >
        <Text style={styles.HeaderStyle}>FAQS</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ flexGrow: 1, paddingHorizontal: 20 }}>
        <ScrollView>
          <View>
            <Notice
              title="How likely am I to catch COVI9-19?"
              subtitle="This tool is intended to help you understand 
            what to do next about COVID-19. You'll answer a few questions about your symptoms,
             travel and contact you've had with others."
            />
            <Notice
              title="Should I worry about COVID-19"
              subtitle="Recommendations provided by this tool do not constitute medical advice and
             should not be used to diagnose or treat medical conditions"
              extra="Let's all look out for each other by knowing our status, trying 
             not to infect others and reserving care for those in need"
            />
            <Notice
              title="Who is at risk of developing severe illness?"
              subtitle="While we are still learning about how COVID-19 affects people, older
              persons and persons with pre-existing medical conditions (such as high blood pressure,
                 heart disease or lung disease) are more likely to develop serious illness"
            />
            <Notice
              title="Are there any medicines or therapy that can prevent or cure COVID19?"
              subtitle="While we are still learning about how COVID-19 affects people, older
              persons and persons with pre-existing medical conditions (such as high blood pressure,
                 heart disease or lung disease) are more likely to develop serious illness"
            />
            <Notice
              title="Is there a vaccine, drug or treatment for COVID19?"
              subtitle="While we are still learning about how COVID-19 affects people, older
              persons and persons with pre-existing medical conditions (such as high blood pressure,
                 heart disease or lung disease) are more likely to develop serious illness"
            />
            <Notice
              title="Is COVID19 the same as SARS?"
              subtitle="While we are still learning about how COVID-19 affects people, older
              persons and persons with pre-existing medical conditions (such as high blood pressure,
                 heart disease or lung disease) are more likely to develop serious illness"
            />
            <Notice
              title="Should i wear a mask to protect myself?"
              subtitle="While we are still learning about how COVID-19 affects people, older
              persons and persons with pre-existing medical conditions (such as high blood pressure,
                 heart disease or lung disease) are more likely to develop serious illness"
            />
            <Notice
              title="Who is at risk of developing severe illness?"
              subtitle="While we are still learning about how COVID-19 affects people, older
              persons and persons with pre-existing medical conditions (such as high blood pressure,
                 heart disease or lung disease) are more likely to develop serious illness"
            />
            <Notice
              title="Who is at risk of developing severe illness?"
              subtitle="While we are still learning about how COVID-19 affects people, older
              persons and persons with pre-existing medical conditions (such as high blood pressure,
                 heart disease or lung disease) are more likely to develop serious illness"
            />
            <Notice
              title="Who is at risk of developing severe illness?"
              subtitle="While we are still learning about how COVID-19 affects people, older
              persons and persons with pre-existing medical conditions (such as high blood pressure,
                 heart disease or lung disease) are more likely to develop serious illness"
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const Notice = ({ title, subtitle, extra }) => {
  const [showSub, setShowSub] = useState(false);
  return (
    <TouchableOpacity style={styles.noticeWrapper} onPress={() => setShowSub(!showSub)}>
      <View>
        <Text style={styles.noticeTitle}>{title}</Text>
      </View>
      {showSub && (
        <View>
          <Text style={styles.noticeSubtitle}>{subtitle}</Text>
          {extra && <Text>{extra}</Text>}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default FAQ;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  HeaderStyle: {
    fontWeight: '600',
    fontSize: 40,
  },
  noticeWrapper: {
    paddingVertical: 25,
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
