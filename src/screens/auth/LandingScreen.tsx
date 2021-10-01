import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoginButton from '../../components/auth/LoginButton';
import SignUpButton from '../../components/auth/SignUpButton';
import {COLORS1} from '../../services/colors.service';

const LandingScreen = () => {
  const onLoginPress = () => {};
  const onSignUpPress = () => {};
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(0,0,0,0)', '#516A7B']}
        style={styles.container}>
        <View style={styles.upperContainer}>
          <Image
            resizeMethod={'auto'}
            source={require('../../assets/images/empower.png')}
            style={styles.image}
          />
        </View>
      </LinearGradient>
      <View style={styles.lowerContainer}>
        <Text style={styles.majorText}>Your Journey Begins Here.</Text>
        <Text style={styles.minorText}>Holistic wellness is within reach.</Text>
        <View style={styles.buttonsWrapper}>
          <LoginButton onPress={onLoginPress} />
          <View style={styles.buttonsDivider} />
          <SignUpButton onPress={onSignUpPress} />
        </View>
      </View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
    flex: 1,
  },
  lowerContainer: {
    height: 395,
  },
  image: {
    width: 224,
    height: 96,
  },
  majorText: {
    fontSize: 30,
    color: COLORS1.white,
    marginTop: 30,
    marginLeft: 35,
    width: 200,
  },
  minorText: {
    fontSize: 18,
    color: COLORS1.gray1,
    marginTop: 29,
    marginLeft: 35,
    marginBottom: 50,
  },
  buttonsWrapper: {
    alignItems: 'center',
  },
  buttonsDivider: {
    height: 25,
  },
});
