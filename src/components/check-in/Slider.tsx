import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CommunitySlider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Slider: React.FC<{sliderValueChanged?: Function}> = ({
  sliderValueChanged,
}) => {
  const [iconGray, setIconGray] = React.useState();
  const [iconYellow, setIconYellow] = React.useState();
  const [sliderValue, setSliderValue] = React.useState(0);

  React.useEffect(() => {
    Icon.getImageSource('circle', 30, 'rgba(50, 71, 85, 1)').then(setIconGray);
    Icon.getImageSource('circle', 30, 'rgba(235, 196, 106, 1)').then(
      setIconYellow,
    );
  }, []);

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

  return (
    <View style={styles.sliderWrapper}>
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
        thumbImage={sliderValue >= 0.5 ? iconYellow : iconGray}
        // thumbImage={require('../../assets/images/splash.png')}
        // thumbTintColor={'rgba(50, 71, 85, 0.5)'}
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
    flex: 1,
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
