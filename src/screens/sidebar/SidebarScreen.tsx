import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import Header from '../../components/shared/Header';
import SidebarButton from '../../components/sidebar/SidebarButton';
import {COLORS1} from '../../services/colors.service';
import {RS_SEMI_BOLD, WS_LIGHT} from '../../services/fonts.service';
import {logoutAction} from '../../store/ducks/authDuck';
import DeviceInfo from 'react-native-device-info';

const SidebarScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <LinearGradient colors={['#FFFFFF', '#F0F3F4']} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Header title={'Account Settings'} />
          <View style={styles.contentContainer}>
            <SidebarButton
              title={'Subscription'}
              value={'active'}
              onPress={() => {}}
            />
            <SidebarButton title={'Name'} value={'name'} onPress={() => {}} />
          </View>
          <TouchableOpacity
            style={styles.logOut}
            onPress={() => dispatch(logoutAction())}>
            <Text style={styles.logOutText}>Log Out</Text>
          </TouchableOpacity>
          <Text style={styles.version}>version: {DeviceInfo.getVersion()}</Text>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SidebarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 21,
    paddingRight: 21,
  },
  touchable: {
    padding: 10,
  },
  contentContainer: {
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 30,
    marginBottom: 30,
  },
  logOut: {
    borderWidth: 1,
    borderColor: '#C8D1D3',
    width: 185,
    height: 52,
    alignSelf: 'center',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logOutText: {
    fontSize: 14,
    fontFamily: RS_SEMI_BOLD,
    color: '#334856',
  },
  version: {
    fontSize: 12,
    fontFamily: WS_LIGHT,
    color: COLORS1.green3,
    textAlign: 'center',
    marginTop: 28,
  },
});
