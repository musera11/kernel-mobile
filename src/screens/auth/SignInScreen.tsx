import LottieView from 'lottie-react-native';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  LayoutAnimation,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import Input from '../../components/auth/Input';
import SubmitButton from '../../components/auth/SubmitButton';
import Header from '../../components/shared/Header';
import BGimageHoc from '../../hocs/BGimageHoc';
import {COLORS1} from '../../services/colors.service';
import {WS_BOLD} from '../../services/fonts.service';
import {signInActionSG} from '../../store/ducks/authDuck';
import {checkedSignedInAction} from '../../store/ducks/mainDuck';

const SignInScreen = () => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
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

  const disableSubmit = () => {
    return !email.match(emailReg) || password.length < 6;
  };

  return (
    <>
      {!showAnimation ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'handled'}>
          <KeyboardAvoidingView
            style={styles.flex1}
            keyboardVerticalOffset={Platform.select({ios: 0, android: -50})}
            behavior={'position'}>
            <LinearGradient
              colors={['rgba(0,0,0,0)', '#516A7B']}
              style={[styles.gradientContainer, {marginTop: insets.top}]}>
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
              <View
                style={[styles.signInWrapper, {marginBottom: insets.bottom}]}>
                <SubmitButton onPress={signIn} disabled={disableSubmit()} />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      ) : (
        <View style={styles.animationWrapper}>
          <LottieView
            source={require('../../assets/animations/startup.json')}
            autoPlay
            loop
          />
        </View>
      )}
    </>
  );
};

export default BGimageHoc(SignInScreen, true, true);

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
    backgroundColor: COLORS1.green2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
