import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import Colors from '../../constants/Colors';

const Stats = ({ results }) => {
  return (
    <View style={styles.wrapper}>
      <ScrollView style={{ flex: 1 }}>
        <View>
          <ScrollView
            style={{ borderWidth: 0, paddingLeft: 20, paddingRight: 20, marginVertical: 20 }}
            contentContainerStyle={{ flexDirection: 'row' }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.card}>
              <ImageBackground
                source={require('~/assets/images/covid.jpeg')}
                imageStyle={{ borderRadius: 20 }}
                style={styles.image}
              >
                <View style={styles.stat}>
                  <Text style={styles.data}>{numeral(results.cases).format(0, 0)}</Text>
                  <Text style={styles.label}>Cases</Text>
                </View>
              </ImageBackground>
            </View>

            <View style={styles.card}>
              <ImageBackground
                source={require('~/assets/images/recovered.jpg')}
                imageStyle={{ borderRadius: 20 }}
                style={styles.image}
              >
                <View style={styles.stat}>
                  <Text style={styles.data}>{numeral(results.recovered).format('0,0')}</Text>
                  <Text style={styles.label}>Recoveries</Text>
                </View>
              </ImageBackground>
            </View>

            <View style={styles.card}>
              <ImageBackground
                source={require('~/assets/images/deaths.jpg')}
                imageStyle={{ borderRadius: 20 }}
                style={styles.image}
              >
                <View style={styles.stat}>
                  <Text style={styles.data}>{numeral(results.deaths).format('0,0')}</Text>
                  <Text style={styles.label}>Deaths</Text>
                </View>
              </ImageBackground>
            </View>
          </ScrollView>
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontWeight: '700', fontSize: 20 }}>Ghana's Situation</Text>
          <Text>Last Updated: {moment(results.updated).format('M/DDD/YYYY')}</Text>

          <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
            <View style={{ borderBottomWidth: 1, borderColor: Colors.divider, paddingVertical: 5 }}>
              <Text style={{ fontSize: 20, fontWeight: '600' }}>
                Confirmed Covid-19 Cases In Ghana As At {moment().format('DD MMMM YYYY,')}
              </Text>
            </View>
            <View>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long
                established fact that a reader will be distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                opposed to using 'Content here, content here', making it look like readable English. Many desktop
                publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search
                for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over
                the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  card: {
    width: 320,
    height: 200,
    marginRight: 20,
    borderRadius: 20,
  },
  image: {
    resizeMode: 'cover',
    flex: 1,
    borderRadius: 20,
    backgroundColor: 'grey',
    padding: 20,
  },
  data: {
    color: '#fff',

    fontSize: 40,
  },
  label: {
    color: '#fff',
    textAlign: 'right',
    fontWeight: '700',
  },
  stat: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});
