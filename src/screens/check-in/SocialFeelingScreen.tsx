import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import Slider from '../../components/check-in/Slider';
import SvgIcon from '../../components/shared/SvgIcon';
import {COLORS1} from '../../services/colors.service';
import {
  RS_BOLD,
  RS_SEMI_BOLD,
  WS_BOLD,
  WS_SEMI_BOLD,
} from '../../services/fonts.service';
import {
  addFeeling,
  clearFeelings,
  removeFeeling,
} from '../../store/ducks/checkInDuck';

const SocialFeelingScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    return () => {
      dispatch(removeFeeling('SOCIAL'));
    };
  }, [dispatch]);

  const goBack = () => {
    navigation.goBack();
  };

  const cancelFlow = () => {
    dispatch(clearFeelings());
    navigation.navigate('Main');
  };

  const onSliderValueChange = (value: number) => {
    setSliderValue(value);
  };

  const getEmojiName = () => {
    if (sliderValue >= 3 / 4) {
      return 'emojiScale4';
    }
    if (sliderValue >= 2 / 4) {
      return 'emojiScale3';
    }
    if (sliderValue >= 1 / 4) {
      return 'emojiScale2';
    }
    return 'emojiScale1';
  };

  const onContinuePress = () => {
    dispatch(addFeeling({dimension: 'SOCIAL', value: sliderValue}));
    navigation.navigate('OccupationalFeeling');
  };

  return (
    <LinearGradient colors={['#72CCD0', '#87BCBF']} style={styles.flex1}>
      <View style={[styles.header, {marginTop: insets.top}]}>
        <TouchableOpacity style={styles.headerIconsWrapper} onPress={goBack}>
          <SvgIcon name="arrowBack" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.headerIconsWrapper}
          onPress={cancelFlow}>
          <SvgIcon name="whiteX" />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.flex1}>
        <Text style={styles.majorText}>How are you feeling in your</Text>
        <Text style={styles.majorText}>
          {' '}
          <Text style={styles.darkText}>social</Text> dimension of life
        </Text>
        <Text style={styles.minorText}>Ethos Name Here</Text>
        <View style={styles.emojiWrapper}>
          <SvgIcon name={getEmojiName()} color="#fff" style={styles.emoji} />
        </View>
        <Text style={styles.emojiText}>Not the best</Text>
        <Text style={styles.centerText}>This is your connection to</Text>
        <Text style={styles.centerText}>
          {' '}
          something bigger <Text style={styles.darkText}>than yourself</Text>
        </Text>
        <Slider
          sliderValueChanged={onSliderValueChange}
          containerStyle={styles.slider}
        />
        <View style={styles.flex1} />
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={onContinuePress}>
            <Text style={styles.buttonText}>CONTINUE</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SocialFeelingScreen;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 90,
  },
  headerIconsWrapper: {
    padding: 10,
    margin: 10,
  },
  majorText: {
    fontFamily: WS_SEMI_BOLD,
    fontSize: 18,
    color: COLORS1.white,
    textAlign: 'center',
    lineHeight: 24,
  },
  minorText: {
    fontFamily: WS_BOLD,
    fontSize: 16,
    color: COLORS1.gray2,
    textAlign: 'center',
    marginTop: 15,
  },
  emojiWrapper: {
    alignItems: 'center',
    marginTop: 71,
  },
  emoji: {
    width: 80,
    height: 80,
  },
  emojiText: {
    fontFamily: WS_SEMI_BOLD,
    fontSize: 15,
    color: COLORS1.white,
    lineHeight: 25,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 26,
  },
  centerText: {
    fontFamily: RS_BOLD,
    letterSpacing: 3,
    fontSize: 20,
    color: COLORS1.white,
    textAlign: 'center',
  },
  darkText: {
    color: COLORS1.gray2,
  },
  slider: {
    marginTop: 82,
    marginLeft: 45,
    marginRight: 45,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginBottom: 65,
    marginTop: 40,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 295,
    height: 50,
    borderWidth: 1,
    borderColor: COLORS1.white,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 14,
    letterSpacing: 2.1,
    fontFamily: RS_SEMI_BOLD,
    color: COLORS1.white,
  },
});
