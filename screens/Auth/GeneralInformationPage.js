import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { Button } from '~/components/common';
import { Section } from '~/components/generalinformation';
const GeneralInformationPage = (props) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.ContentStyle}>
        <View style={styles.HeaderStyle}>
          <Text style={styles.HeaderTextStyle}>General Information</Text>
        </View>
        <View style={styles.InfoStyle}>
          <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: 25 }}>
            <Section />
            <Section
              title="Collection of your information"
              subtitle="We may collect information about you in a variety of ways. The information we may collect via the Application depends on the content and materials you use and includes:"
            />
            <Section
              title="Personal Information"
              subtitle="Demographic and other personally identifiable information that you voluntarily give to us while using this application is anonymized and is only made available to the relevant authorities in cases of emergency."
            />
            <Section
              title="Geo-location information"
              subtitle="We may request access or permissions to track location-based information from your mobile device, either continuously or while you are using the Application, to provide location-based services. If you wish to change our access or permissions, you may do so in your device's settings."
            />
            <Section
              title="Mobile device access"
              subtitle="We may request access or permission to certain features from your mobile device, including your mobile device's bluetooth, gps. If you wish to change our access or permission, you may do so in the app's settings."
            />
            <Section
              title="Push notifications"
              subtitle="We may request to send you push notifications regarding your account or the Application. if you wish to opt-out from receiving these types of communications, you may turn them off in the app's settings."
            />
            <Section
              title="Use of your information"
              subtitle="Having accurate information about you allows us to provide you with a smooth, efficient and cutomized experience. Specifically, We may use information collected about you via the Application to:"
              list={[
                'Assist relevant authority to respond to suspected COVID-19 cases',
                'Compile anonymous statistical data and analysis',
                'Deliver targeted notifications concerning COVID-19 to you',
                'Monitor and analyze usage trends to inform sensitization efforts',
              ]}
            />
            <Section
              title="Disclosure of your information"
              subtitle="We will be sharing anonymized information we collect about you with the relebant government agencies and health services."
            />
            <Section
              title="Options regarding your information"
              subtitle="You may at any time review or change the information in your account or terminate your account by:"
              list={[
                'Logging into your account settings and updating your account',
                'Contacting us using the contact information provided below:\n[send emails to: info@polymorphs.io]',
              ]}
              extras="Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements."
            />
            <Section
              title="Contact Us"
              subtitle="If you have questions or comments about this Privacy Policy, please contact us at:"
              addressinfo={{
                name: 'Polymorph Labs Gh. Ltd',
                street: '17 National Service Avenue Market Street',
                town: 'Haatso, Accra',
                country: 'Ghana',
                phone: '+233 204045782',
                email: 'info@polymorph.io',
              }}
            />
          </ScrollView>
        </View>
        <View style={styles.FooterStyle}>
          <Button backgroundColor="#000" title="Let's get started..." onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GeneralInformationPage;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ContentStyle: {
    flex: 1,
  },
  HeaderStyle: {
    flex: 0.7,
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEFF2',
  },
  InfoStyle: {
    flex: 10,
  },
  FooterStyle: {
    flex: 1,
    paddingHorizontal: 25,
  },
  HeaderTextStyle: {
    fontSize: 43,
    fontWeight: '700',
  },
});
