import * as React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import {DraxProvider} from 'react-native-drax';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import EthosCard from '../../components/ethos/EthosCard';
import EthosFooter from '../../components/ethos/EthosFooter';
import EthosHeader from '../../components/ethos/EthosHeader';
import {COLORS1} from '../../services/colors.service';
import {RS_SEMI_BOLD, WS_BOLD} from '../../services/fonts.service';
import {RootState} from '../../store/configureStore';
import {
  postCardsByDimensionsActionSG,
  setCardsByDimensionAction,
  setSelectedCardsAction,
} from '../../store/ducks/ethosDuck';
import {EthosCardType, EthosCardWithDimension} from '../../types/ethos';

const EditEthosCardsScreen: React.FC<{navigation: any}> = ({navigation}) => {
  const {selectedCards, cardsByDimension} = useSelector(
    (state: RootState) => state.ethosReducer,
  );
  const dispatch = useDispatch();
  console.log(Dimensions.get('window').height);

  const [draggingCard, setDraggingCard] = React.useState<EthosCardType>();

  const onDragStart = (card: EthosCardType) => {
    setDraggingCard(card);
  };

  const onReceiveDragDrop = (card: EthosCardWithDimension) => {
    if (!draggingCard) {
      return;
    }
    const [
      draggingCardIndex,
      receivingCardIndexInSelectedCards,
      receivingCardIndex,
    ] = [
      selectedCards.findIndex(c => draggingCard._id === c._id),
      selectedCards.findIndex(c => card._id === c._id),
      cardsByDimension.findIndex(c => card._id === c._id),
    ];
    cardsByDimension[receivingCardIndex] = {
      dimension: card.dimension,
      ...draggingCard,
    };
    const temp = selectedCards[draggingCardIndex];
    selectedCards[draggingCardIndex] =
      selectedCards[receivingCardIndexInSelectedCards];
    selectedCards[receivingCardIndexInSelectedCards] = temp;
    dispatch(setSelectedCardsAction(selectedCards));
    dispatch(setCardsByDimensionAction(cardsByDimension));
  };

  const onNextPress = () => {
    dispatch(
      postCardsByDimensionsActionSG(
        cardsByDimension.map(c => ({
          ethosCardId: c._id,
          type: c.dimension.toUpperCase(),
        })),
      ),
    );
    navigation.navigate('SubmitSelectedEthosCards');
  };

  const getCardsToRender = () => {
    return selectedCards.filter(
      card => !cardsByDimension.find(cardByD => cardByD._id === card._id),
    );
  };

  return (
    <>
      <EthosHeader />
      <Text style={styles.majorText}>
        Are there any of these 7 Ethos that fit better than the ones chosen?
      </Text>
      <Text style={styles.minorText}>DRAG AND DROP INTO PLACE</Text>
      <DraxProvider>
        <LinearGradient colors={['#fff', '#F0F3F4']} style={styles.flex1}>
          <View style={styles.lineCardsWrapper}>
            {getCardsToRender().map((card, i) => (
              <EthosCard
                draggable
                card={card}
                containerStyle={styles.firstLineCard}
                draxViewProps={{
                  onDragStart: () => onDragStart(card),
                  hoverDragReleasedStyle: {display: 'none'},
                }}
                key={`${i}`}
              />
            ))}
          </View>
          <View style={styles.container}>
            {cardsByDimension.map((card, i) => (
              <View style={styles.texAndCardWrapper} key={`${i}`}>
                <Text style={styles.dimensionText}>{card.dimension}</Text>
                <EthosCard
                  draggable
                  removeShadow
                  selected
                  card={card}
                  containerStyle={styles.card}
                  draxViewProps={{
                    receivingStyle: styles.receivingStyle,
                    onReceiveDragDrop: () => onReceiveDragDrop(card),
                  }}
                />
              </View>
            ))}
          </View>
          <EthosFooter onNext={onNextPress} containerStyle={styles.footer} />
        </LinearGradient>
      </DraxProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 10,
    flex: 1,
  },
  majorText: {
    color: COLORS1.gray2,
    fontSize: 18,
    fontFamily: WS_BOLD,
    marginTop: Dimensions.get('window').height < 750 ? 35 : 50,
    textAlign: 'center',
  },
  minorText: {
    color: COLORS1.green3,
    fontSize: 11,
    fontFamily: RS_SEMI_BOLD,
    letterSpacing: 1.65,
    marginTop: 5,
    textAlign: 'center',
  },
  texAndCardWrapper: {
    alignItems: 'center',
  },
  dimensionText: {
    textAlign: 'center',
    color: COLORS1.gray2,
    fontSize: 16,
    fontFamily: RS_SEMI_BOLD,
    letterSpacing: 0.8,
    marginTop: Dimensions.get('window').height < 750 ? 5 : 22,
  },
  card: {
    margin: 7,
  },
  lineCardsWrapper: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: Dimensions.get('window').height < 750 ? 15 : 34,
    justifyContent: 'space-around',
    paddingLeft: 42,
    paddingRight: 22,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  firstLineCard: {
    width: 65,
    height: 75,
    borderRadius: 10,
    marginLeft: -20,
  },
  receivingStyle: {
    borderColor: COLORS1.orange,
    opacity: 0.8,
  },
  hoverDragReleasedStyle: {
    display: 'none',
  },
  flex1: {
    flex: 1,
  },
  zIndex1: {
    zIndex: 1,
  },
  footer: {
    marginBottom: 51,
  },
});

export default EditEthosCardsScreen;
