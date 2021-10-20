import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import SvgIcon from '../../components/shared/SvgIcon';
import {COLORS1} from '../../services/colors.service';
import {RS_SEMI_BOLD, WS_BOLD, WS_MEDIUM} from '../../services/fonts.service';
import {clearFeelings} from '../../store/ducks/checkInDuck';

const CheckInNotesScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

  const saveCheckIn = () => {
    dispatch(clearFeelings());
    navigation.navigate('Main');
  };

  const cancelFlow = () => {
    dispatch(clearFeelings());
    navigation.navigate('Main');
  };

  return (
    <LinearGradient colors={['#72CCD0', '#87BCBF']} style={styles.flex1}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView
          style={styles.flex1}
          keyboardVerticalOffset={Platform.select({ios: -130, android: -130})}
          behavior={'position'}>
          <View style={[styles.header, {marginTop: insets.top}]}>
            <TouchableOpacity style={styles.xWrapper} onPress={cancelFlow}>
              <SvgIcon name="blackX" />
            </TouchableOpacity>
          </View>
          <View style={styles.firstContainer}>
            <SvgIcon name="bigSun" />
            <Text style={[styles.questionText, styles.marginTop8]}>
              Do you want to
            </Text>
            <Text style={styles.questionText}>
              add any additional thoughts?
            </Text>
            <Text style={styles.dateText}>August 30, 2021</Text>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="NOTES"
              multiline
              numberOfLines={10}
              editable
            />
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button} onPress={saveCheckIn}>
              <Text style={styles.buttonText}>SAVE CHECK IN</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </LinearGradient>
  );
};

export default CheckInNotesScreen;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  xWrapper: {
    padding: 10,
    margin: 10,
  },
  firstContainer: {
    alignItems: 'center',
    marginTop: 62,
  },
  questionText: {
    color: COLORS1.white,
    fontFamily: WS_BOLD,
    fontSize: 18,
    width: 260,
    textAlign: 'center',
  },
  dateText: {
    marginTop: 11,
    color: COLORS1.white,
    fontFamily: WS_MEDIUM,
    fontSize: 16,
  },
  marginTop8: {
    marginTop: 8,
  },
  inputWrapper: {
    paddingLeft: 19,
    paddingRight: 19,
    marginTop: 23,
  },
  input: {
    paddingLeft: 21,
    paddingRight: 21,
    paddingTop: 16,
    paddingBottom: 16,
    height: 281,
    backgroundColor: COLORS1.white,
    borderRadius: 15,
    textAlignVertical: 'top',
    fontSize: 12,
    color: COLORS1.gray2,
    letterSpacing: 1.65,
    fontFamily: RS_SEMI_BOLD,
  },
  buttonWrapper: {
    alignItems: 'center',
    marginBottom: 65,
    marginTop: 100,
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
