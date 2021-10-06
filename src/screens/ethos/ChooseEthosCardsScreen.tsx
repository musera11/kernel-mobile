import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import EthosCard from '../../components/ethos/EthosCard';
import EthosFooter from '../../components/ethos/EthosFooter';
import EthosHeader from '../../components/ethos/EthosHeader';
import {COLORS1} from '../../services/colors.service';
import {WS_BOLD, WS_SEMI_BOLD} from '../../services/fonts.service';
import {RootState} from '../../store/configureStore';
import {
  getCardsActionSG,
  setSelectedCardsAction,
} from '../../store/ducks/ethosDuck';
import {EthosCardType} from '../../types/ethos';

const REQUIRED_CARDS = 14;

const ChooseEthosCardsScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const dispatch = useDispatch();
  const {cards} = useSelector((state: RootState) => state.ethosReducer);
  const [selectedCards, setSelectedCards] = useState<EthosCardType[]>([]);

  useEffect(() => {
    dispatch(getCardsActionSG());
  }, [dispatch]);

  const addCard = (card: EthosCardType) => {
    setSelectedCards(oldState => [...oldState, card]);
  };

  const disableCard = (card: EthosCardType) => {
    return (
      selectedCards.includes(card) || selectedCards.length === REQUIRED_CARDS
    );
  };

  const onNextPress = () => {
    dispatch(setSelectedCardsAction(selectedCards));
    navigation.navigate('Dimensions');
  };

  const onBackPress = () => {
    navigation.canGoBack() && navigation.goBack();
  };

  return (
    <LinearGradient colors={['#fff', '#F0F3F4']} style={styles.flex1}>
      <EthosHeader />
      <View style={styles.textsWrapper}>
        <Text style={styles.mainText}>
          Choose 14 ethos cards that resonate with{' '}
          <Text style={styles.youText}>YOU</Text>
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {cards.map(card => (
          <EthosCard
            card={card}
            onPress={addCard}
            disabled={disableCard(card)}
            key={card._id}
            containerStyle={styles.card}
          />
        ))}
      </ScrollView>
      <View style={styles.lowerContainer}>
        <EthosFooter
          onNext={onNextPress}
          onBack={onBackPress}
          theme="light"
          disableNext={selectedCards.length !== REQUIRED_CARDS}
        />
        <View style={styles.divider} />
      </View>
    </LinearGradient>
  );
};

export default ChooseEthosCardsScreen;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  card: {
    margin: 7,
  },
  scrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 25,
  },
  lowerContainer: {
    height: 331,
    backgroundColor: COLORS1.gray2,
  },
  divider: {
    marginBottom: 51,
  },
  textsWrapper: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  mainText: {
    color: COLORS1.gray2,
    fontSize: 18,
    fontFamily: WS_BOLD,
    width: 208,
    textAlign: 'center',
  },
  youText: {
    color: COLORS1.green1,
    fontSize: 18,
    fontFamily: WS_SEMI_BOLD,
  },
});
