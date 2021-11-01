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
  postCardsActionSG,
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

  const horizontalCardsArray = () => {
    return [
      ...selectedCards,
      ...new Array(14 - selectedCards.length).fill(null),
    ];
  };

  const addCard = (card: EthosCardType) => {
    setSelectedCards(oldState => [...oldState, card]);
  };

  const removeCard = (card: EthosCardType) => {
    const i = selectedCards.findIndex(c => c._id === card._id);
    setSelectedCards(oldState => {
      oldState.splice(i, 1);
      return [...oldState];
    });
  };

  const disableCard = (card: EthosCardType) => {
    return (
      selectedCards.includes(card) || selectedCards.length === REQUIRED_CARDS
    );
  };

  const onNextPress = () => {
    dispatch(postCardsActionSG(selectedCards.map(c => c._id)));
    dispatch(setSelectedCardsAction(selectedCards));
    navigation.navigate('PhysicalDimension');
  };

  const onBackPress = () => {
    navigation.canGoBack() && navigation.goBack();
  };

  return (
    <LinearGradient colors={['#fff', '#F0F3F4']} style={styles.flex1}>
      <EthosHeader />
      <View style={styles.textsWrapper}>
        <Text style={styles.mainText}>
          Choose 14 ethos cards These are the values that guide{' '}
          <Text style={styles.youText}>your life</Text>
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {cards.map(card => (
          <EthosCard
            card={card}
            onPress={addCard}
            disabled={disableCard(card)}
            selected={selectedCards.includes(card)}
            key={card._id}
            containerStyle={styles.card}
          />
        ))}
      </ScrollView>
      <View style={styles.lowerContainer}>
        <ScrollView
          contentContainerStyle={styles.horizontalScrollView}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {horizontalCardsArray().map((card, i) =>
            card ? (
              <View style={[styles.selectedCardWrapper]} key={`${i}`}>
                <EthosCard
                  card={card}
                  disabled
                  selected
                  containerStyle={styles.selectedCard}
                  onRemove={removeCard}
                  removeShadow
                />
              </View>
            ) : (
              <View style={styles.dashed} key={`${i}`} />
            ),
          )}
        </ScrollView>
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
  horizontalScrollView: {
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 20,
    marginTop: 24,
  },
  lowerContainer: {
    height: 200,
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
    width: 300,
    textAlign: 'center',
  },
  youText: {
    color: COLORS1.green1,
    fontSize: 18,
    fontFamily: WS_SEMI_BOLD,
  },
  firstLineCardsWrapper: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-around',
    paddingLeft: 30,
  },
  secondLineCardsWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    paddingLeft: 30,
    marginBottom: 30,
  },
  dashed: {
    width: 126,
    height: 43,
    borderRadius: 10,
    marginLeft: 8,
    borderStyle: 'dashed',
    borderColor: COLORS1.gray4,
    borderWidth: 2,
    backgroundColor: COLORS1.gray2,
  },
  selectedCard: {
    width: 126,
    height: 43,
    borderRadius: 10,
  },
  selectedCardWrapper: {
    marginLeft: 8,
  },
  zIndex1: {
    zIndex: 1,
  },
});
