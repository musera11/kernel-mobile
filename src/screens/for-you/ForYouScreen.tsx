import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';

const ForYouScreen: React.FC<{navigation: any}> = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>some text</Text>
    </ScrollView>
  );
};

export default ForYouScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 60,
  },
});
