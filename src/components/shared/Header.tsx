import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Header: React.FC<{style?: ViewStyle}> = ({style}) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <View style={[styles.container, {marginTop: insets.top}, {...style}]}>
        <Text>header</Text>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
