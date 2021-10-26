import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import DimensionContent from '../../components/ethos/DimensionContent';
import EthosFooter from '../../components/ethos/EthosFooter';
import EthosHeader from '../../components/ethos/EthosHeader';
import {COLORS1} from '../../services/colors.service';
import {RS_BOLD, WS_BOLD} from '../../services/fonts.service';
import {
  addCardByDimensionAction,
  removeCardByDimensionAction,
} from '../../store/ducks/ethosDuck';
import {EthosCardType} from '../../types/ethos';

const SpiritualDimensionScreen: React.FC<{navigation: any}> = ({
  navigation,
}) => {
  const dispatch = useDispatch();
  const [selectedCard, setSelectedCard] = useState<EthosCardType>();

  useEffect(() => {
    return () => {
      dispatch(removeCardByDimensionAction());
    };
  }, [dispatch]);

  const selectCard = (card: EthosCardType) => {
    setSelectedCard(card);
  };

  const onNextPress = () => {
    if (selectedCard) {
      dispatch(
        addCardByDimensionAction({
          dimension: 'spiritual',
          ...selectedCard,
        }),
      );
      navigation.navigate('EditEthosCards');
    }
  };

  const onBackPress = () => {
    navigation.canGoBack() && navigation.goBack();
  };

  return (
    <LinearGradient colors={['#fff', '#F0F3F4']} style={styles.flex1}>
      <EthosHeader />
      <View style={styles.container}>
        <View style={styles.flex1} />
        <Text style={styles.majorText}>
          Choose the Ethos that guides your spiritual dimension of life
        </Text>
        <Text style={styles.minorText}>
          This is
          <Text style={styles.gray3}> your connection </Text>
          to something bigger than yourself
        </Text>
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

export default SpiritualDimensionScreen;

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
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  minorText: {
    color: COLORS1.green1,
    fontFamily: RS_BOLD,
    fontSize: 20,
    marginTop: 14,
    marginBottom: 16,
    textAlign: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  gray3: {
    color: COLORS1.gray3,
  },
  footer: {
    marginBottom: 51,
  },
});
