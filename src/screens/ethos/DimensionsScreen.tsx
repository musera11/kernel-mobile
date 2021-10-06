import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS1} from '../../services/colors.service';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RS_SEMI_BOLD, WS_BOLD} from '../../services/fonts.service';
import SvgIcon from '../../components/shared/SvgIcon';
import EthosFooter from '../../components/ethos/EthosFooter';

const DIMENSIONS = [
  'PHYSICAL',
  'MENTAL',
  'SOCIAL',
  'OCCUPATIONAL',
  'ENVIRONMENTAL',
  'EMOTIONAL',
  'SPIRITUAL',
];

const DimensionsScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const insets = useSafeAreaInsets();

  const onNextPress = () => {
    navigation.navigate('PhysicalDimension');
  };

  const onBackPress = () => {
    navigation.canGoBack() && navigation.goBack();
  };

  return (
    <>
      <LinearGradient colors={['#516A7B', '#324755']} style={styles.flex1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.container, {marginTop: insets.top}]}>
            <SvgIcon name="em" style={styles.emIcon} />
            <Text style={styles.majorText}>7 Dimensions of Life</Text>
            <Text style={styles.minorText}>
              Each ethos will live within these 7 pillars.
            </Text>
            <SvgIcon name="whiteAudio" style={styles.audioIcon} />
            {DIMENSIONS.map(text => (
              <Text style={styles.dimensionText}>{text}</Text>
            ))}
            <EthosFooter
              onNext={onNextPress}
              onBack={onBackPress}
              theme="light"
              containerStyle={styles.footer}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
};

export default DimensionsScreen;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  majorText: {
    fontFamily: WS_BOLD,
    fontSize: 18,
    marginTop: 14,
    color: COLORS1.white,
  },
  minorText: {
    fontFamily: RS_SEMI_BOLD,
    fontSize: 15,
    color: COLORS1.white,
    letterSpacing: 0.75,
    marginTop: 4,
  },
  dimensionText: {
    fontFamily: RS_SEMI_BOLD,
    fontSize: 20,
    color: COLORS1.white,
    letterSpacing: 1,
    marginTop: 30,
  },
  emIcon: {
    marginTop: 50,
    marginBottom: 14,
  },
  audioIcon: {
    marginTop: 14,
    marginBottom: 15,
  },
  footer: {
    marginBottom: 51,
    marginTop: 51,
  },
});
