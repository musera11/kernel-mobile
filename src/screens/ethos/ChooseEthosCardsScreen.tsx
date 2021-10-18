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
  const [firstLineCards, setFirstLineCards] = useState<
    (EthosCardType | null)[]
  >(Array(7).fill(null));
  const [secondLineCards, setSecondLineCards] = useState<
    (EthosCardType | null)[]
  >(Array(7).fill(null));

  useEffect(() => {
    dispatch(getCardsActionSG());
  }, [dispatch]);

  const addCard = (card: EthosCardType) => {
    if (selectedCards.length < Math.floor(REQUIRED_CARDS / 2)) {
      setFirstLineCards(oldState => {
        oldState[selectedCards.length] = card;
        return [...oldState];
      });
    } else {
      setSecondLineCards(oldState => {
        oldState[selectedCards.length - Math.floor(REQUIRED_CARDS / 2)] = card;
        return [...oldState];
      });
    }
    setSelectedCards(oldState => [...oldState, card]);
  };

  const removeCard = (card: EthosCardType) => {
    const i = selectedCards.findIndex(c => c._id === card._id);
    if (i < Math.floor(REQUIRED_CARDS / 2)) {
      setFirstLineCards(oldState => {
        oldState[i] = null;
        return [...oldState];
      });
    } else {
      setSecondLineCards(oldState => {
        oldState[i - Math.floor(REQUIRED_CARDS / 2)] = null;
        return [...oldState];
      });
    }
    setSelectedCards(oldState => {
      oldState.splice(i, 1);
      return [...oldState];
    });
  };

  const showRemove = (i: number, whichLine: number) => {
    if (
      whichLine === 1 &&
      selectedCards.length <= Math.floor(REQUIRED_CARDS / 2) &&
      i === selectedCards.length - 1
    ) {
      return true;
    } else if (
      whichLine === 2 &&
      selectedCards.length > Math.floor(REQUIRED_CARDS / 2) &&
      i === selectedCards.length - Math.floor(REQUIRED_CARDS / 2) - 1
    ) {
      return true;
    }
    return false;
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
          Choose 14 Ethos cards These are the values that guide{' '}
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
        <View style={styles.firstLineCardsWrapper}>
          {firstLineCards.map((card, i) =>
            card ? (
              <View
                style={[
                  styles.selectedCardWrapper,
                  !firstLineCards[i + 1] && styles.zIndex1,
                ]}
                key={`${i}`}>
                <EthosCard
                  card={card}
                  disabled
                  selected
                  containerStyle={styles.selectedCard}
                  onRemove={showRemove(i, 1) ? removeCard : undefined}
                  removeShadow
                />
              </View>
            ) : (
              <View style={styles.dashed} key={`${i}`} />
            ),
          )}
        </View>
        <View style={styles.secondLineCardsWrapper}>
          {secondLineCards.map((card, i) =>
            card ? (
              <View
                style={[
                  styles.selectedCardWrapper,
                  !secondLineCards[i + 1] && styles.zIndex1,
                ]}
                key={`${i}`}>
                <EthosCard
                  card={card}
                  disabled
                  selected
                  containerStyle={styles.selectedCard}
                  onRemove={showRemove(i, 2) ? removeCard : undefined}
                  removeShadow
                />
              </View>
            ) : (
              <View style={styles.dashed} key={`${i}`} />
            ),
          )}
        </View>
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
    width: 65,
    height: 75,
    borderRadius: 10,
    borderStyle: 'dashed',
    borderColor: COLORS1.gray4,
    borderWidth: 2,
    marginLeft: -20,
    backgroundColor: COLORS1.gray2,
  },
  selectedCard: {
    width: 65,
    height: 75,
    borderRadius: 10,
  },
  selectedCardWrapper: {
    marginLeft: -20,
  },
  zIndex1: {
    zIndex: 1,
  },
});
