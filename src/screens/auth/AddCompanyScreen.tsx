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
import CheckBox from 'react-native-check-box';
import Button from '../../components/shared/Button';
import Headline from '../../components/shared/Headline';
import Input from '../../components/shared/Input';

const AddCompanyScreen = () => {
  const translate = useTranslation().t;
  const [companyName, setCompanyName] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [tax, setTax] = useState<string>('');
  const [isSelected, setSelection] = useState<boolean>(false);

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
                value={companyName}
                onChangeText={setCompanyName}
                textInput={companyName}
                label={translate('AddCompany.name')}
              />
              <Input
                value={country}
                onChangeText={setCountry}
                textInput={country}
                label={translate('AddCompany.country')}
              />
              <Input
                value={tax}
                onChangeText={setTax}
                textInput={tax}
                label={translate('AddCompany.tax')}
              />
              <View style={styles.checkboxContainer}>
                <Text style={styles.checkboxLabel}>
                  {translate('AddCompany.vat')}
                </Text>
                <CheckBox
                  isChecked={isSelected}
                  onClick={() => setSelection(!isSelected)}
                  style={styles.checkbox}
                />
              </View>
            </View>

            <View style={styles.nextButton}>
              <Button
                onPress={() => console.log(1)}
                title={translate('AddCompany.buttonText')}
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
    marginTop: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkboxLabel: {
    color: '#293961',
    fontSize: 16,
    fontWeight: '400',
    flex: 1,
  },
  checkbox: {
    // flex: 1,
    alignSelf: 'flex-end',
    marginLeft: 'auto',
  },
});
