import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {DraxProvider} from 'react-native-drax';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import EthosCard from '../../components/ethos/EthosCard';
import {COLORS1} from '../../services/colors.service';
import {RootState} from '../../store/configureStore';
import {
  setCardsByDimensionAction,
  setSelectedCardsAction,
} from '../../store/ducks/ethosDuck';
import {EthosCardType, EthosCardWithDimension} from '../../types/ethos';

const EditEthosCardsScreen = () => {
  const {selectedCards, cardsByDimension} = useSelector(
    (state: RootState) => state.ethosReducer,
  );
  const dispatch = useDispatch();

  const [draggingCard, setDraggingCard] = React.useState<EthosCardType>();

  const onDragStart = (card: EthosCardType) => {
    setDraggingCard(card);
  };

  const onReceiveDragDrop = (card: EthosCardWithDimension) => {
    if (!draggingCard) {
      return;
    }
    const draggingCardIndex = selectedCards.indexOf(draggingCard);
    const receivingCardIndex = cardsByDimension.indexOf(card);

    dispatch(setSelectedCardsAction(selectedCards));
    dispatch(setCardsByDimensionAction(cardsByDimension));
  };

  const getCardsToRender = () => {
    return selectedCards.filter(
      card => !cardsByDimension.find(cardByD => cardByD._id === card._id),
    );
  };

  return (
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
        <ScrollView
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}>
          {cardsByDimension.map((card, i) => (
            <EthosCard
              draggable
              selected
              card={card}
              containerStyle={styles.card}
              draxViewProps={{
                receivingStyle: styles.receivingStyle,
                onReceiveDragDrop: () => onReceiveDragDrop(card),
              }}
              key={`${i}`}
            />
          ))}
        </ScrollView>
      </LinearGradient>
    </DraxProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 25,
  },
  card: {
    margin: 7,
  },
  lineCardsWrapper: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-around',
    paddingLeft: 30,
  },
  firstLineCard: {
    width: 65,
    height: 75,
    borderRadius: 10,
    marginLeft: -20,
  },
  receivingStyle: {
    borderColor: COLORS1.orange,
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
  draggingStyle: {backgroundColor: 'red'},
  dragReleasedStyle: {backgroundColor: 'green'},
  hoverDraggingStyle: {backgroundColor: 'yellow'},
});

export default EditEthosCardsScreen;
