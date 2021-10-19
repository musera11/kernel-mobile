import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import ForYouCard from '../../components/forYou/ForYouCard';
import SvgIcon from '../../components/shared/SvgIcon';
import {COLORS1} from '../../services/colors.service';
import {WS_BOLD} from '../../services/fonts.service';
import {RootState} from '../../store/configureStore';
import {IUserData} from '../../types/main';

const ForYouScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const userData: IUserData = useSelector(
    (state: RootState) => state.authReducer.userData,
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate('Sidebar')}>
          <SvgIcon name="profileSettings" />
        </TouchableOpacity>
        <SvgIcon name="empower" />
        <TouchableOpacity style={styles.touchable}>
          <SvgIcon name="hart" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>
        Good morning, {'\n' + userData.firstName}
      </Text>
      <View style={styles.cardsContainer}>
        <ForYouCard
          title={'Take ETHOS'}
          subTitle={'Discover your Ethos Manifest'}
          icon={'takeEthos'}
          onPress={() => navigation.navigate('ChooseEthosCards')}
        />
        <ForYouCard
          title={'Check in'}
          subTitle={'How are you in this moment?'}
          icon={'sun'}
          onPress={() => navigation.navigate('ChooseEthosCards')}
        />
        <ForYouCard
          title={'My Goals'}
          subTitle={'Achievement starts within'}
          icon={'myGoalsMain'}
          onPress={() => navigation.navigate('ChooseEthosCards')}
        />
        <ForYouCard
          title={'My Gratitude Board'}
          subTitle={'What are you thankful for?'}
          icon={'gratitudeMain'}
          onPress={() => navigation.navigate('ChooseEthosCards')}
        />
      </View>
    </ScrollView>
  );
};

export default ForYouScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 60,
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
  title: {
    color: COLORS1.white,
    fontSize: 30,
    fontFamily: WS_BOLD,
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 80,
  },
  cardsContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});
