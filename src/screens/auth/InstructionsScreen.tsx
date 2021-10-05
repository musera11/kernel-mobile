/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS1} from '../../services/colors.service';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RS_MEDIUM, RS_SEMI_BOLD, WS_BOLD} from '../../services/fonts.service';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SvgIcon from '../../components/shared/SvgIcon';

const InstructionsScreen = () => {
  const next = () => {};
  const insets = useSafeAreaInsets();
  return (
    <>
      <LinearGradient colors={['#FFCF9A', '#FFBE76']} style={styles.flex1}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.container, {marginTop: insets.top}]}>
            <Text style={styles.headingText}>Ethos Instructions</Text>
            <SvgIcon name="card" style={{marginTop: 29}} />
            <Text style={styles.stepText}>Step1</Text>
            <Text style={[styles.stepDescText, {width: 133}]}>
              Choose 14 ethos cards
            </Text>
            <SvgIcon name="tree" style={{marginTop: 48}} />
            <Text style={styles.stepText}>Step2</Text>
            <Text style={[styles.stepDescText, {width: 164}]}>
              Each individual ethos lives Within a dimension of life
            </Text>
            <SvgIcon name="compass" style={{marginTop: 48}} />
            <Text style={styles.stepText}>Step3</Text>
            <Text style={[styles.stepDescText, {width: 145}]}>
              You’ll have your power 7 To guide you every day
            </Text>
            <View style={styles.footerWrapper}>
              <SvgIcon name="audio" />
              <View />
              <TouchableOpacity style={styles.button} onPress={next}>
                <Text style={styles.buttonText}>NEXT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
};

export default InstructionsScreen;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    marginBottom: 15,
  },
  headingText: {
    fontFamily: WS_BOLD,
    color: COLORS1.gray3,
    fontSize: 22,
    marginTop: 55,
  },
  svg: {
    marginTop: 29,
  },
  stepText: {
    fontFamily: WS_BOLD,
    color: COLORS1.gray3,
    fontSize: 18,
    marginTop: 17,
    textAlign: 'center',
  },
  stepDescText: {
    fontFamily: RS_SEMI_BOLD,
    color: COLORS1.gray3,
    fontSize: 15,
    marginTop: 2,
    textAlign: 'center',
  },
  footerWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 53,
    paddingLeft: 31,
    paddingRight: 23,
  },
  button: {
    borderColor: COLORS1.gray2,
    width: 123,
    height: 52,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontFamily: RS_MEDIUM,
    color: COLORS1.gray3,
  },
});
