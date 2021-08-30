import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/shared/Header';

const ChatRoomsScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>ChatRoomsScreen</Text>
    </View>
  );
};

export default ChatRoomsScreen;

const styles = StyleSheet.create({
  container: {},
});
