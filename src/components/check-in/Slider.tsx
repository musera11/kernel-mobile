import React from 'react';
import {Platform, StyleSheet, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CommunitySlider from '@react-native-community/slider';

const Slider: React.FC<{
  sliderValueChanged?: Function;
  containerStyle?: ViewStyle;
}> = ({sliderValueChanged, containerStyle}) => {
  const [sliderValue, setSliderValue] = React.useState(0);

  const onSliderValueChange = (value: number) => {
    setSliderValue(value);
    sliderValueChanged && sliderValueChanged(value);
  };

  const getGradient = () => {
    if (sliderValue >= 3 / 4) {
      return ['#FFCE00', '#8DD100'];
    }
    if (sliderValue >= 2 / 4) {
      return ['#FFBE76', '#FFCE00'];
    }
    if (sliderValue >= 1 / 4) {
      return ['#D97D54', '#FFDE71'];
    }
    return ['#3A464E', '#738B9B'];
  };

  const geThumbImage = () => {
    if (sliderValue >= 3 / 4) {
      return require('../../assets/images/greenCircle.png');
    }
    if (sliderValue >= 2 / 4) {
      return require('../../assets/images/yellowCircle.png');
    }
    if (sliderValue >= 1 / 4) {
      return require('../../assets/images/redCircle.png');
    }
    return require('../../assets/images/blackCircle.png');
  };

  return (
    <View style={[styles.sliderWrapper, containerStyle]}>
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        colors={getGradient()}
        style={styles.sliderGradient}
      />
      <CommunitySlider
        style={styles.slider}
        value={sliderValue}
        onValueChange={onSliderValueChange}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="transparent"
        maximumTrackTintColor="transparent"
        thumbImage={geThumbImage()}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sliderWrapper: {
    height: 10,
  },
  sliderGradient: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 15,
  },
  slider: {
    flex: 1,
    position: 'absolute',
    top: Platform.OS === 'ios' ? -15 : -4,
    left: 0,
    width: '100%',
  },
});
