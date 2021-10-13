/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  LayoutAnimation,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  UIManager,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Spinner from 'react-native-spinkit';
import {useDispatch} from 'react-redux';
import Input from '../../components/auth/Input';
import SubmitButton from '../../components/auth/SubmitButton';
import Header from '../../components/shared/Header';
import useKeyboardOffset from '../../hoocs/useKeyboard';
import {COLORS1} from '../../services/colors.service';
import {WS_BOLD, WS_REGULAR} from '../../services/fonts.service';
import {signUpActionSG} from '../../store/ducks/authDuck';
import {checkedSignedInAction} from '../../store/ducks/mainDuck';

const SignUpScreen = () => {
  const dispatch = useDispatch();
  const keyboardOffset = useKeyboardOffset();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [companyCode, setCompanyCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAnimation, setShowAnimation] = useState(false);
  const emailReg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  const disableSubmit = () => {
    return (
      firstName.trim().length === 0 ||
      lastName.trim().length === 0 ||
      phone.trim().length === 0 ||
      companyCode.trim().length === 0 ||
      !email.match(emailReg) ||
      password.trim().length < 6
    );
  };

  const signUp = () => {
    dispatch(
      signUpActionSG(
        {
          companyCode,
          email,
          firstName,
          lastName,
          password,
          phone,
        },
        () => {
          LayoutAnimation.spring();
          setShowAnimation(true);
          setTimeout(() => {
            dispatch(checkedSignedInAction(true));
          }, 7000);
        },
      ),
    );
  };

  return (
    <>
      {!showAnimation ? (
        <LinearGradient colors={['#72CCD0', '#87BCBF']} style={styles.flex1}>
          <Header statusBarMargin />
          {!keyboardOffset ? <View style={styles.flex1} /> : null}
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps={'handled'}>
            <KeyboardAvoidingView
              keyboardVerticalOffset={Platform.select({
                ios: 90,
                android: 0,
              })}
              behavior={'position'}>
              <View style={styles.lowerContainer}>
                <>
                  <Text style={styles.majorText}>Create a new account</Text>
                  <View style={styles.line} />
                  <Text style={styles.minorText}>
                    Your greatness starts today.
                  </Text>
                </>
                <Input
                  value={firstName}
                  onChangeText={setFirstName}
                  placeholder="First name"
                  inputContainerStyle={styles.inputContainer}
                />
                <Input
                  value={lastName}
                  onChangeText={setLastName}
                  placeholder="Last name"
                  inputContainerStyle={styles.inputContainer}
                />
                <Input
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Email"
                  inputContainerStyle={styles.inputContainer}
                  textInputProps={{
                    keyboardType: 'email-address',
                    autoCompleteType: 'email',
                  }}
                />
                <Input
                  value={phone}
                  onChangeText={setPhone}
                  placeholder="Phone"
                  inputContainerStyle={styles.inputContainer}
                  textInputProps={{
                    keyboardType: 'number-pad',
                    autoCorrect: true,
                    autoCompleteType: 'tel',
                    textContentType: 'telephoneNumber',
                  }}
                />
                <Input
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Password"
                  textInputProps={{secureTextEntry: true}}
                  inputContainerStyle={styles.inputContainer}
                />
                <Input
                  value={companyCode}
                  onChangeText={setCompanyCode}
                  placeholder="Company code"
                  inputContainerStyle={styles.inputContainer}
                />
                <View
                  style={[
                    styles.signUpWrapper,
                    {
                      marginTop:
                        Dimensions.get('window').height < 700 ? 20 : 70,
                    },
                  ]}>
                  <SubmitButton onPress={signUp} disabled={disableSubmit()} />
                </View>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </LinearGradient>
      ) : (
        <View style={styles.animationWrapper}>
          <Spinner
            isVisible={true}
            type={'Bounce'}
            color={COLORS1.white}
            size={80}
          />
        </View>
      )}
    </>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
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
  },
  line: {
    width: 33,
    height: 1,
    backgroundColor: COLORS1.white,
    marginTop: 12,
    marginBottom: 14,
  },
  minorText: {
    fontFamily: WS_REGULAR,
    fontSize: 18,
    color: COLORS1.gray1,
    marginBottom: 70,
  },
  signUpWrapper: {
    alignItems: 'center',
    marginTop: 70,
  },
  inputsDivider: {
    height: 10,
  },
  inputContainer: {
    borderBottomColor: COLORS1.white,
  },
  animationWrapper: {
    flex: 1,
    backgroundColor: COLORS1.green2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
