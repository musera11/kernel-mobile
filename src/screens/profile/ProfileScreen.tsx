import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Dimensions, Platform} from 'react-native';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Header from '../../components/shared/Header';
import {COLORS} from '../../services/colors.service';
import {M_MEDIUM, M_SEMI_BOLD} from '../../services/fonts.service';

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
        <TouchableOpacity style={styles.settingsAddPhotosWrapper}>
          <LinearGradient
            colors={[COLORS.green2, COLORS.yellow1]}
            style={styles.settingsGradient}>
            <Fontisto name="rocket" size={28} color={COLORS.white1} />
          </LinearGradient>
          <Text style={styles.settingsAddPhotosText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsAddPhotosWrapper}>
          <LinearGradient
            colors={[COLORS.green2, COLORS.yellow1]}
            style={styles.addPhotosGradient}>
            <Fontisto name="rocket" size={28} color={COLORS.white1} />
          </LinearGradient>
          <Text style={styles.settingsAddPhotosText}>Add Photos</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line3}>
        <View style={styles.infoItemWrapper}>
          <Text style={styles.infoItemKeyText}>Full Name</Text>
          <Text style={styles.infoItemValueText}>John</Text>
        </View>
        <View style={styles.infoItemWrapper}>
          <Text style={styles.infoItemKeyText}>Gender</Text>
          <Text style={styles.infoItemValueText}>Make</Text>
        </View>
        <View style={[styles.infoItemWrapper, styles.paddingLeft29]}>
          <Text style={styles.infoItemKeyText}>Age</Text>
          <Text style={styles.infoItemValueText}>27</Text>
        </View>
      </View>
      <View style={styles.circularWrapper}>
        <View style={styles.circular} />
        <View style={styles.line4}>
          <View style={styles.muteLogOutWrapper}>
            <Text style={styles.muteText}>Mute Notifications</Text>
            <LinearGradient
              colors={[COLORS.white1, COLORS.white2]}
              style={styles.muteGradient}>
              <Fontisto name="rocket" size={20} color={COLORS.red1} />
            </LinearGradient>
          </View>
          <View style={styles.logoutWrapper}>
            <Text style={styles.logoutText}>Log Out</Text>
            <LinearGradient
              colors={[COLORS.white1, COLORS.white2]}
              style={styles.logoutGradient}>
              <Fontisto name="rocket" size={19} color={COLORS.red1} />
            </LinearGradient>
          </View>
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
  settingsGradient: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    borderRadius: 56,
  },
  addPhotosGradient: {
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
    fontFamily: M_SEMI_BOLD,
  },
  line3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 51,
    paddingRight: 51,
    marginTop: 57,
  },
  infoItemWrapper: {
    alignItems: 'center',
  },
  infoItemKeyText: {
    fontSize: 12,
    opacity: 0.54,
    color: COLORS.black1,
    fontFamily: M_MEDIUM,
  },
  infoItemValueText: {
    marginTop: 14,
    fontSize: 18,
    color: COLORS.black1,
    fontFamily: M_SEMI_BOLD,
  },
  circularWrapper: {
    height: Platform.select({
      android: Dimensions.get('window').height - 510,
      ios: Dimensions.get('window').height - 610,
    }),
    backgroundColor: COLORS.white2,
  },
  circular: {
    top: 29,
    position: 'absolute',
    backgroundColor: COLORS.white1,
    width: Dimensions.get('window').width * 2,
    height: Dimensions.get('window').width * 2,
    left: -Dimensions.get('window').width / 2,
    borderRadius: Dimensions.get('window').width * 2,
  },
  line4: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 45,
    paddingRight: 61,
    marginTop: 150,
  },
  muteLogOutWrapper: {
    alignItems: 'center',
    width: 96,
  },
  logoutWrapper: {
    alignItems: 'center',
  },
  muteText: {
    fontFamily: M_MEDIUM,
    fontSize: 14,
    color: COLORS.black1,
    textAlign: 'center',
  },
  logoutText: {
    fontFamily: M_MEDIUM,
    fontSize: 16,
    color: COLORS.red1,
    marginBottom: 15,
  },
  muteGradient: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  logoutGradient: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  paddingLeft29: {
    paddingLeft: 29,
  },
});
