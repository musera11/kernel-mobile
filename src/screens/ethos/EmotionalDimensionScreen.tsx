import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import DimensionContent from '../../components/ethos/DimensionContent';
import EthosFooter from '../../components/ethos/EthosFooter';
import {COLORS1} from '../../services/colors.service';
import {WS_BOLD} from '../../services/fonts.service';
import {addCardByDimensionAction} from '../../store/ducks/ethosDuck';
import {EthosCardType} from '../../types/ethos';

const EmotionalDimensionScreen: React.FC<{navigation: any}> = ({
  navigation,
}) => {
  const dispatch = useDispatch();
  const [selectedCard, setSelectedCard] = useState<EthosCardType>();

  const selectCard = (card: EthosCardType) => {
    setSelectedCard(card);
  };

  const onNextPress = () => {
    if (selectedCard) {
      dispatch(
        addCardByDimensionAction({
          dimension: 'emotional',
          ...selectedCard,
        }),
      );
      navigation.navigate('SpiritualDimension');
    }
  };

  const onBackPress = () => {
    navigation.canGoBack() && navigation.goBack();
  };

  return (
    <LinearGradient colors={['#fff', '#F0F3F4']} style={styles.flex1}>
      <View style={styles.container}>
        <View style={styles.flex1} />
        <Text style={styles.majorText}>Choose one ethos for your</Text>
        <Text style={styles.minorText}>EMOTIONAL DIMENSION</Text>
        <DimensionContent selectCard={selectCard} selectedCard={selectedCard} />
      </View>
      <EthosFooter
        onBack={onBackPress}
        onNext={onNextPress}
        disableNext={!selectedCard}
        containerStyle={styles.footer}
      />
    </LinearGradient>
  );
};

export default EmotionalDimensionScreen;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  majorText: {
    color: COLORS1.gray2,
    fontFamily: WS_BOLD,
    fontSize: 18,
  },
  minorText: {
    color: COLORS1.green1,
    fontFamily: WS_BOLD,
    fontSize: 20,
    marginTop: 1,
    marginBottom: 16,
  },
  footer: {
    marginBottom: 51,
  },
});
