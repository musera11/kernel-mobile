import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/shared/Header';

const VenuesScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>VenuesScreen</Text>
    </View>
  );
};

export default VenuesScreen;

const styles = StyleSheet.create({
  container: {},
});
