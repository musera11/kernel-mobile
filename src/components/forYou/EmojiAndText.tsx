import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {COLORS1} from '../../services/colors.service';
import {WS_BOLD, WS_SEMI_BOLD} from '../../services/fonts.service';
import {RootState} from '../../store/configureStore';
import SvgIcon from '../shared/SvgIcon';

const EmojiAndText: React.FC<{sliderValue: number; dimension: string}> = ({
  sliderValue,
  dimension,
}) => {
  const cards = useSelector(
    (state: RootState) => state.ethosReducer.lastTimeSelectedCardsByDimension,
  );

  const getCardName = () => {
    return cards.find(c => c.dimension === dimension)?.title;
  };

  const getEmojiName = () => {
    if (sliderValue >= 3 / 4) {
      return 'emojiScale4';
    }
    if (sliderValue >= 2 / 4) {
      return 'emojiScale3';
    }
    if (sliderValue >= 1 / 4) {
      return 'emojiScale2';
    }
    return 'emojiScale1';
  };

  const getEmojiText = () => {
    if (sliderValue >= 3 / 4) {
      return 'Super awesome';
    }
    if (sliderValue >= 2 / 4) {
      return 'Great';
    }
    if (sliderValue >= 1 / 4) {
      return 'Somewhat bad';
    }
    return 'Not the best';
  };

  return (
    <View>
      <Text style={styles.minorText}>{getCardName()}</Text>
      <View style={styles.emojiWrapper}>
        <SvgIcon name={getEmojiName()} color="#fff" style={styles.emoji} />
      </View>
      <Text style={styles.emojiText}>{getEmojiText()}</Text>
    </View>
  );
};

export default EmojiAndText;

const styles = StyleSheet.create({
  minorText: {
    fontFamily: WS_BOLD,
    fontSize: 16,
    color: COLORS1.gray2,
    textAlign: 'center',
    marginTop: 15,
  },
  emojiWrapper: {
    alignItems: 'center',
    marginTop: 71,
  },
  emoji: {
    width: 80,
    height: 80,
  },
  emojiText: {
    fontFamily: WS_SEMI_BOLD,
    fontSize: 15,
    color: COLORS1.white,
    lineHeight: 25,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 26,
  },
});
