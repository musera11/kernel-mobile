import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/shared/Header';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {},
});
