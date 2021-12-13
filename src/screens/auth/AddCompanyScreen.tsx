import React from 'react';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View, Text} from 'react-native';
// import {Checkbox} from 'react-native-paper';
import Input from '../../components/shared/Input';
import Button from '../../components/shared/Button';
// import Headline from '../../components/shared/Headline';

const AddCompanyScreen = () => {
  const translate = useTranslation().t;
  const [inputText, setInputText] = useState('');
  // const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.textt}>
        <Text>Headlie</Text>
      </View>
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
          {/* <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            color="#00D369"
          /> */}
        </View>
      </View>

      <View style={styles.nextButton}>
        <Button
          title="Next"
          color="#fff"
          backgroundColor="#3FA9F5"
          borderColor="#3FA9F5"
          top={0}
        />
      </View>
      <View style={styles.titleContainer}>
        {/* <Headline text="Add My Company Information" /> */}
      </View>
    </View>
  );
};

export default AddCompanyScreen;

const styles = StyleSheet.create({
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
  slider: {
    flex: 1,
    marginBottom: 50,
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
