import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../../components/shared/Button';
import Headline from '../../components/shared/Headline';
import Input from '../../components/shared/Input';

const AddCompanyScreen = () => {
  const translate = useTranslation().t;
  const [inputText, setInputText] = useState('');
  // const [checked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.flex1}>
      <KeyboardAvoidingView
        style={styles.flex1}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <ScrollView style={styles.flex1}>
            <Headline text={translate('AddCompany.headline')} />
            <View style={styles.inputContainer}>
              <Input
                value={inputText}
                onChangeText={setInputText}
                textInput={inputText}
                label="My Company Name"
              />
              <Input
                value={inputText}
                onChangeText={setInputText}
                textInput={inputText}
                label="Country"
              />
              <Input
                value={inputText}
                onChangeText={setInputText}
                textInput={inputText}
                label="Tax ID"
              />
              <View style={styles.checkboxContainer}>
                <View>
                  <Text style={styles.checkboxLabel}>VAT Payer</Text>
                </View>
              </View>
            </View>

            <View style={styles.nextButton}>
              <Button
                onPress={() => console.log(1)}
                title="Next"
                color="#fff"
                backgroundColor="#3FA9F5"
                borderColor="#3FA9F5"
                top={0}
              />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddCompanyScreen;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    color: 'black',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    top: 130,
  },
  nextButton: {
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  textt: {
    backgroundColor: 'red',
  },
  inputContainer: {
    flex: 1,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkboxLabel: {
    color: '#293961',
    fontSize: 16,
    fontWeight: '400',
  },
});
