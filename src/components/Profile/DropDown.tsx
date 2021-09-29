import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {COLORS} from '../../services/colors.service';
import {M_SEMI_BOLD} from '../../services/fonts.service';

const DropDown = () => {
  const [pkValue, setPkValue] = useState('football');

  const pickHandler = (v: string) => {
    console.log(v);
    if (v) {
      console.log('setting pick value');
      setPkValue(v);
    }
  };
  const c = () => {
    setTimeout(() => {
      console.log('object');
      setPkValue('football');
    }, 0);
  };

  return (
    <RNPickerSelect
      useNativeAndroidPickerStyle={false}
      pickerProps={{
        mode: 'dropdown',
      }}
      style={{
        inputIOS: styles.input,
        inputAndroid: styles.input,
        headlessAndroidContainer: styles.container,
        inputIOSContainer: styles.container,
      }}
      onDonePress={() => console.log('done press')}
      onValueChange={value => pickHandler(value)}
      value={pkValue}
      onClose={c}
      items={[
        {label: 'Football', value: 'football'},
        {label: 'Baseball', value: 'baseball'},
        {label: 'Hockey', value: 'hockey'},
      ]}
    />
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: COLORS.white1,
    borderRadius: 28,
    shadowColor: COLORS.black1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
  },
  input: {
    marginLeft: 20,
    color: COLORS.black1,
    fontFamily: M_SEMI_BOLD,
    fontSize: 18,
  },
  listItem: {},
});
