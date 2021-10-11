import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/configureStore';
import {EthosCardType} from '../../types/ethos';
import EthosCard from './EthosCard';

const DimensionContent: React.FC<{
  selectCard: Function;
  selectedCard: EthosCardType | undefined;
}> = ({selectCard, selectedCard}) => {
  const {selectedCards} = useSelector((state: RootState) => state.ethosReducer);
  const {cardsByDimension} = useSelector(
    (state: RootState) => state.ethosReducer,
  );
  const getCardsToRender = () => {
    return selectedCards.filter(
      card => !cardsByDimension.find(cardByD => cardByD._id === card._id),
    );
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      {getCardsToRender().map((card, i) => (
        <EthosCard
          key={`${i}`}
          card={card}
          onPress={selectCard}
          disabled={card === selectedCard}
          containerStyle={styles.card}
          selected={card === selectedCard}
        />
      ))}
    </ScrollView>
  );
};

export default DimensionContent;

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
});
