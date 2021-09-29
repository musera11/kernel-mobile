import React, {useState} from 'react';

import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import DropDown from '../../components/Profile/DropDown';
import Input from '../../components/Profile/Input';
import InterestItem from '../../components/Profile/InterestItem';
import Header from '../../components/shared/Header';
import {COLORS} from '../../services/colors.service';
import {
  M_MEDIUM,
  M_REGULAR,
  M_SEMI_BOLD,
  O_SEMI_BOLD,
} from '../../services/fonts.service';

const ProfileSettingsScreen = () => {
  const [interests, setInterests] = useState<string[]>([]);
  const [interestInputValue, setInterestInputValue] = useState('');
  const [showAge, setShowAge] = useState(false);
  const [showGender, setShowGender] = useState(false);
  const [fullName, setFullName] = useState('John doe');
  const [phone, setPhone] = useState('+995599123456');
  const [selectedLanguage, setSelectedLanguage] = useState();

  const removeInterest = (index: number) => {
    setInterests(interests.filter((item, i) => i !== index));
  };

  const addInterest = () => {
    if (interests.find(int => int === interestInputValue)) {
      console.log('already added');
      return;
    }
    setInterests([...interests, interestInputValue]);
  };

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Text style={styles.settingsText}>Settings</Text>
      <View style={styles.yourInterestsTextAndIconWrapper}>
        <Text style={styles.yourInterestsText}>Your Interests</Text>
        <Fontisto name="rocket" size={19} color={COLORS.red1} />
      </View>
      <Text style={styles.maxText}>Maximum 6</Text>
      <View style={styles.textInputWrapper}>
        <TextInput
          style={styles.textInput}
          maxLength={30}
          placeholder="Your Interest"
          placeholderTextColor="rgba(8, 31, 39,0.36)"
          value={interestInputValue}
          onChangeText={setInterestInputValue}
        />
        <TouchableOpacity
          style={styles.textInputIconWrapper}
          disabled={!interestInputValue || interests.length === 6}
          onPress={addInterest}>
          <Fontisto name="rocket" size={17} color={COLORS.red1} />
        </TouchableOpacity>
      </View>
      <View style={styles.interestsContainer}>
        {interests.map((int, i) => (
          <InterestItem
            interest={int}
            index={i}
            onRemovePress={removeInterest}
            style={styles.interest}
            key={int}
          />
        ))}
      </View>
      <Text style={styles.hideFormOthersText}>Hide from others</Text>
      <View style={styles.switchersContainer}>
        <Text style={styles.hideShowText}>{showAge ? 'show' : 'hide'}</Text>
        <View style={styles.switchersWrapper}>
          <View style={styles.switcherWrapper}>
            <Text style={styles.ageGenderText}>Age</Text>
            <Switch
              trackColor={{false: '#767577', true: '#00000029'}}
              thumbColor={showAge ? '#57897B' : '#F6FFFD'}
              ios_backgroundColor="#ECEEE8"
              onValueChange={() => setShowAge(previousState => !previousState)}
              value={showAge}
            />
          </View>
          <View style={styles.switcherWrapper}>
            <Text style={styles.ageGenderText}>Gender</Text>
            <Switch
              trackColor={{false: '#767577', true: '#00000029'}}
              thumbColor={showGender ? '#57897B' : '#F6FFFD'}
              ios_backgroundColor="#ECEEE8"
              onValueChange={() =>
                setShowGender(previousState => !previousState)
              }
              value={showGender}
            />
          </View>
        </View>
        <Text style={styles.hideShowText}>{showGender ? 'show' : 'hide'}</Text>
      </View>
      <Input
        value={fullName}
        onChangeText={setFullName}
        label="full Name"
        inputContainerStyle={styles.inputContainerStyle}
        mainContainerStyle={styles.inputMainContainerStyle}
      />
      <Input
        value={phone}
        onChangeText={setPhone}
        label="Phone"
        inputContainerStyle={styles.inputContainerStyle}
        mainContainerStyle={styles.inputMainContainerStyle}
      />
      <DropDown />
    </ScrollView>
  );
};

export default ProfileSettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white2,
    paddingLeft: 16,
    paddingRight: 16,
  },
  settingsText: {
    fontFamily: O_SEMI_BOLD,
    fontSize: 28,
    color: COLORS.black1,
  },
  yourInterestsTextAndIconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  yourInterestsText: {
    fontFamily: M_MEDIUM,
    fontSize: 18,
    color: COLORS.black1,
    marginRight: 14,
  },
  maxText: {
    fontFamily: M_REGULAR,
    fontSize: 14,
    color: COLORS.black1,
    opacity: 0.54,
    marginTop: 10,
  },
  textInputWrapper: {
    marginTop: 10,
  },
  textInput: {
    fontFamily: M_SEMI_BOLD,
    flex: 1,
    borderRadius: 21,
    height: 42,
    paddingLeft: 22,
    paddingRight: 40,
    backgroundColor: COLORS.white1,
    color: COLORS.black1,
    borderWidth: 1,
    borderColor: COLORS.gray3,
  },
  textInputIconWrapper: {
    position: 'absolute',
    right: 10,
    top: 0,
    padding: 12,
  },
  interestsContainer: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  interest: {
    marginRight: 14,
    marginBottom: 17,
  },
  hideFormOthersText: {
    fontFamily: M_MEDIUM,
    fontSize: 18,
    color: COLORS.black1,
    textAlign: 'center',
    marginTop: 20,
  },
  switchersContainer: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  switchersWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 25,
    marginRight: 25,
  },
  switcherWrapper: {
    alignItems: 'center',
  },
  hideShowText: {
    fontFamily: M_REGULAR,
    fontSize: 14,
    color: COLORS.black1,
    marginBottom: 8,
    width: 40,
  },
  ageGenderText: {
    fontFamily: M_SEMI_BOLD,
    fontSize: 18,
    color: COLORS.black1,
    marginBottom: 19,
  },
  inputContainerStyle: {
    marginLeft: 2,
    marginRight: 2,
  },
  inputMainContainerStyle: {
    marginTop: 30,
  },
});
