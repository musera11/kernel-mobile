import Slider from '@react-native-community/slider';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SvgIcon from '../../components/shared/SvgIcon';
import {COLORS1} from '../../services/colors.service';
import {WS_BOLD} from '../../services/fonts.service';

const CheckInScreen = () => {
  const [iconGray, setIconGray] = React.useState();
  const [iconYellow, setIconYellow] = React.useState();
  const [sliderValue, setSliderValue] = React.useState(0);

  React.useEffect(() => {
    Icon.getImageSource('circle', 30, 'rgba(50, 71, 85, 1)').then(setIconGray);
    Icon.getImageSource('circle', 30, 'rgba(235, 196, 106, 1)').then(
      setIconYellow,
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <SvgIcon name={'sun'} width={40} height={40} />
        <Text style={styles.headerText}>My daily check-in</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.contentWrapper}>
          <View style={styles.sliderContainer}>
            <Text>PHYSICAL</Text>
            <View style={styles.sliderWrapper}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                colors={
                  sliderValue >= 0.5
                    ? ['#C7955D', '#FFDE71']
                    : ['#3A464E', '#738B9B']
                }
                style={styles.sliderGradient}
              />
              <Slider
                style={styles.slider}
                value={sliderValue}
                onValueChange={setSliderValue}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="transparent"
                maximumTrackTintColor="transparent"
                thumbImage={sliderValue >= 0.5 ? iconYellow : iconGray}
                // thumbImage={require('../../assets/images/splash.png')}
                // thumbTintColor={'rgba(50, 71, 85, 0.5)'}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Icon size={28} name={'arrow-forward-ios'} color={'white'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CheckInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#72CCD0',
  },
  header: {
    marginTop: 50,
    alignItems: 'center',
  },
  headerText: {
    color: COLORS1.white,
    fontSize: 18,
    fontFamily: WS_BOLD,
  },
  contentContainer: {
    height: 544,
    paddingRight: 19,
    paddingLeft: 19,
    marginTop: 24,
  },
  contentWrapper: {
    backgroundColor: COLORS1.white,
    flex: 1,
    borderRadius: 10,
    paddingLeft: 23,
    paddingRight: 23,
    paddingTop: 43,
    paddingBottom: 25,
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sliderWrapper: {
    flex: 1,
    marginLeft: 30,
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
  button: {
    width: 46,
    height: 46,
    borderRadius: 46,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS1.orange,
    alignSelf: 'center',
    marginTop: 30,
  },
});
