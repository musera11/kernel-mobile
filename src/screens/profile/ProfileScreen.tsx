import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import Fontisto from 'react-native-vector-icons/Fontisto';
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
        <View style={styles.settingsAddPhotosWrapper}>
          {/* <LinearGradient
            colors={[COLORS.green2, COLORS.yellow1]}
            style={styles.settingsWrapper}>
            <Fontisto name="rocket" size={28} color={COLORS.white1} />
          </LinearGradient>
          <Text style={styles.settingsAddPhotosText}>Settings</Text>
        </View>
        <View style={styles.settingsAddPhotosWrapper}>
          <LinearGradient
            colors={[COLORS.green2, COLORS.yellow1]}
            style={styles.addPhotosWrapper}>
            <Fontisto name="rocket" size={28} color={COLORS.white1} />
          </LinearGradient> */}
          <Text style={styles.settingsAddPhotosText}>Add Photos</Text>
        </View>
      </View>
      <View style={styles.line3}>
        <View style={styles.infoItemWrapper}>
          <Text style={styles.infoItemKeyText}>Full Name</Text>
          <Text style={styles.infoItemValueText}>John</Text>
        </View>
      </View>
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
    marginTop: 21,
  },
  settingsAddPhotosWrapper: {
    alignItems: 'center',
  },
  settingsWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    borderRadius: 56,
  },
  addPhotosWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    borderRadius: 56,
  },
  settingsAddPhotosText: {
    fontSize: 16,
    color: COLORS.black1,
    marginTop: 7,
  },
  line3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 51,
    paddingRight: 51,
  },
  infoItemWrapper: {
    justifyContent: 'center',
  },
  infoItemKeyText: {
    fontSize: 12,
    opacity: 0.54,
    color: COLORS.black1,
  },
  infoItemValueText: {
    marginTop: 14,
    fontSize: 18,
    color: COLORS.black1,
  },
});
