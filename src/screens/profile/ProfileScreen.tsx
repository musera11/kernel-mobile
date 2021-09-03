import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Header from '../../components/shared/Header';
import {COLORS} from '../../services/colors.service';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.line1}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://c8.alamy.com/comp/P06238/green-number-387-on-green-paper-background-P06238.jpg',
          }}
        />
      </View>
      <View style={styles.line2}>
        <View style={styles.settingsWrapper}>
          <Fontisto name="rocket" size={28} color={COLORS.white1} />
        </View>
        <View style={styles.addPhotosWrapper}>
          <Fontisto name="rocket" size={32} color={COLORS.white1} />
        </View>
      </View>
      <View style={styles.line3}></View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white2,
  },
  header: {
    backgroundColor: COLORS.white2,
  },
  line1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 193,
    height: 193,
    borderRadius: 193,
  },
  line2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 59,
    paddingRight: 59,
  },
  line3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 51,
    paddingRight: 51,
  },
  settingsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
  },
  addPhotosWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
  },
});
