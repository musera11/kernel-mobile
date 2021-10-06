import React from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const EthosHeader = () => {
  const insets = useSafeAreaInsets();
  return <View style={{marginTop: insets.top}} />;
};

export default EthosHeader;
