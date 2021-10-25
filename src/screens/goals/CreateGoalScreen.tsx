import React, {useState} from 'react';
import {
  Dimensions,
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
import {RS_SEMI_BOLD, WS_BOLD} from '../../services/fonts.service';

const CreateGoalsScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [desc, setDesc] = useState('');
  const [title, setTitle] = useState('');

  const goBack = () => {
    navigation.goBack();
  };

  const addGoal = () => {};

  return (
    <LinearGradient colors={['#FFFFFF', '#F0F3F4']} style={styles.flex1}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView
          style={styles.flex1}
          keyboardVerticalOffset={Platform.select({ios: -70, android: -130})}
          behavior={'position'}>
          <View style={[styles.header, {marginTop: insets.top}]}>
            <TouchableOpacity style={styles.xWrapper} onPress={goBack}>
              <SvgIcon name="blackX" />
            </TouchableOpacity>
          </View>
          <View
            style={[
              styles.firstContainer,
              Dimensions.get('window').height < 450
                ? styles.firstContainerBigMargin
                : styles.firstContainerSmallMargin,
            ]}>
            <Text style={[styles.questionText, styles.marginBottom30]}>
              Add your next goal!
            </Text>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="TEXT"
              editable
              onChangeText={text => setTitle(text)}
              maxLength={20}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.textAre}
              placeholder="TEXT"
              multiline
              numberOfLines={10}
              editable
              onChangeText={text => setDesc(text)}
              maxLength={118}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button} onPress={addGoal}>
              <Text style={styles.buttonText}>ADD A GOAL</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </LinearGradient>
  );
};

export default CreateGoalsScreen;

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
    marginTop: 10,
    marginRight: 17,
  },
  firstContainer: {
    alignItems: 'center',
  },
  firstContainerBigMargin: {
    marginTop: 162,
  },
  firstContainerSmallMargin: {
    marginTop: 62,
  },
  questionText: {
    color: COLORS1.gray2,
    fontFamily: WS_BOLD,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 30,
  },
  marginBottom30: {
    marginTop: 30,
  },
  inputWrapper: {
    paddingLeft: 19,
    paddingRight: 19,
    marginTop: 23,
  },
  textAre: {
    paddingLeft: 21,
    paddingRight: 21,
    paddingTop: 16,
    paddingBottom: 16,
    height: 139,
    backgroundColor: COLORS1.white,
    borderRadius: 15,
    textAlignVertical: 'top',
    fontSize: 12,
    color: COLORS1.gray2,
    letterSpacing: 1.65,
    fontFamily: RS_SEMI_BOLD,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  input: {
    paddingLeft: 21,
    paddingRight: 21,
    paddingTop: 16,
    paddingBottom: 16,
    height: 44,
    backgroundColor: COLORS1.white,
    borderRadius: 15,
    textAlignVertical: 'top',
    fontSize: 12,
    color: COLORS1.gray2,
    letterSpacing: 1.65,
    fontFamily: RS_SEMI_BOLD,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
    borderColor: COLORS1.gray2,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 14,
    letterSpacing: 2.1,
    fontFamily: RS_SEMI_BOLD,
    color: COLORS1.gray2,
  },
});
