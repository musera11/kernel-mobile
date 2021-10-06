import AnimatedLottieView from 'lottie-react-native';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  LayoutAnimation,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import SubmitButton from '../../components/auth/SubmitButton';
import Input from '../../components/auth/Input';
import {COLORS1} from '../../services/colors.service';
import Header from '../../components/shared/Header';
import {WS_BOLD} from '../../services/fonts.service';
import {signInActionSG} from '../../store/ducks/authDuck';
import {checkedSignedInAction} from '../../store/ducks/mainDuck';

const SignInScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAnimation, setShowAnimation] = useState(false);
  const emailReg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const signIn = () => {
    dispatch(
      signInActionSG({email, password}, () => {
        LayoutAnimation.spring();
        setShowAnimation(true);
        setTimeout(() => {
          dispatch(checkedSignedInAction(true));
        }, 7000);
      }),
    );
  };

  return (
    <>
      {!showAnimation ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView
            style={styles.flex1}
            keyboardVerticalOffset={Platform.select({ios: 50, android: 0})}
            behavior={'position'}>
            <LinearGradient
              colors={['rgba(0,0,0,0)', '#516A7B']}
              style={styles.gradientContainer}>
              <Header style={styles.absolute} />
              <View style={styles.upperContainer}>
                <Image
                  resizeMethod={'auto'}
                  source={require('../../assets/images/empower.png')}
                  style={styles.image}
                />
              </View>
            </LinearGradient>
            <View style={styles.lowerContainer}>
              <Text style={styles.majorText}>Login</Text>
              <View style={styles.line} />
              <Input
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                textInputProps={{
                  keyboardType: 'email-address',
                  autoCompleteType: 'email',
                }}
              />
              <View style={styles.inputsDivider} />
              <Input
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                textInputProps={{
                  secureTextEntry: true,
                  autoCompleteType: 'password',
                }}
              />
              <View style={styles.signInWrapper}>
                <SubmitButton
                  onPress={signIn}
                  disabled={!email.match(emailReg) || password.length < 6}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      ) : (
        <View style={styles.animationWrapper}>
          <AnimatedLottieView
            autoPlay
            source={require('../../assets/animations/startup.json')}
          />
        </View>
      )}
    </>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  absolute: {
    position: 'absolute',
  },
  gradientContainer: {
    height: Dimensions.get('window').height / 2,
  },
  upperContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
    flex: 1,
  },
  lowerContainer: {
    marginLeft: 33,
    marginRight: 33,
  },
  image: {
    width: 224,
    height: 96,
  },
  majorText: {
    fontFamily: WS_BOLD,
    fontSize: 30,
    color: COLORS1.white,
    marginTop: 30,
    width: 200,
  },
  line: {
    width: 33,
    height: 2,
    backgroundColor: COLORS1.white,
    marginTop: 15,
    marginBottom: 13,
  },
  signInWrapper: {
    alignItems: 'center',
    marginTop: 70,
  },
  inputsDivider: {
    height: 10,
  },
  animationWrapper: {
    flex: 1,
    backgroundColor: COLORS1.gray2,
  },
});
