import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {COLORS} from '../../services/colors.service';

const ChatRoomsSearch = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        maxLength={40}
        placeholder="Search"
        placeholderTextColor="rgba(8, 31, 39,0.36)"
      />
      <Fontisto
        name="rocket"
        size={20}
        color={COLORS.black1}
        style={styles.searchIcon}
      />
    </View>
  );
};

export default ChatRoomsSearch;

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.gray2,
  },
  textInput: {
    flex: 1,
    borderRadius: 20,
    height: 36,
    marginLeft: 16,
    marginRight: 16,
    paddingLeft: 50,
    paddingRight: 20,
    backgroundColor: COLORS.white1,
    color: COLORS.black3,
  },
  searchIcon: {
    position: 'absolute',
    left: 30,
  },
});
