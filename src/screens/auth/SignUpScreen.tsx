/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SubmitButton from '../../components/auth/SubmitButton';
import Input from '../../components/auth/Input';
import {COLORS1} from '../../services/colors.service';
import Header from '../../components/shared/Header';
import useKeyboardOffset from '../../hoocs/useKeyboard';

const SignUpScreen = () => {
  console.log(Dimensions.get('window').height);
  const signIn = () => {};
  const keyboardOffset = useKeyboardOffset();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [companyCode, setCompanyCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
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
              />
              <Input
                value={phone}
                onChangeText={setPhone}
                placeholder="Phone"
                inputContainerStyle={styles.inputContainer}
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
                  {marginTop: Dimensions.get('window').height < 700 ? 20 : 70},
                ]}>
                <SubmitButton onPress={signIn} />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </LinearGradient>
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
});
