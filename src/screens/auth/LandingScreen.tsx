import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LoginButton from '../../components/auth/LoginButton';
import SignUpButton from '../../components/auth/SignUpButton';
import {COLORS1} from '../../services/colors.service';
import {WS_BOLD, WS_REGULAR} from '../../services/fonts.service';

const LandingScreen = ({navigation}: {navigation: any}) => {
  const onLoginPress = () => {
    navigation.navigate('SignIn');
  };
  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };
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
        <View style={styles.line} />
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
    fontFamily: WS_BOLD,
  },
  line: {
    width: 33,
    height: 2,
    backgroundColor: COLORS1.white,
    marginTop: 15,
    marginBottom: 13,
    marginLeft: 35,
  },
  minorText: {
    fontSize: 18,
    color: COLORS1.gray1,
    marginLeft: 35,
    marginBottom: 50,
    fontFamily: WS_REGULAR,
  },
  buttonsWrapper: {
    alignItems: 'center',
  },
  buttonsDivider: {
    height: 25,
  },
});
