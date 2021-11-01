import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {DraxView, DraxViewProps} from 'react-native-drax';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS1} from '../../services/colors.service';
import {RS_BOLD} from '../../services/fonts.service';
import SvgIcon from '../shared/SvgIcon';

const EthosCard: React.FC<{
  card: {title: string; _id: string};
  onPress?: Function;
  onRemove?: Function;
  containerStyle?: ViewStyle;
  disabled?: boolean;
  selected?: boolean;
  draggable?: boolean;
  draxViewProps?: DraxViewProps;
  removeShadow?: boolean;
}> = ({
  card,
  onPress,
  containerStyle,
  disabled,
  selected,
  onRemove,
  draggable,
  draxViewProps,
  removeShadow,
}) => {
  return (
    <>
      {!draggable ? (
        <TouchableOpacity
          disabled={disabled}
          style={[
            removeShadow ? styles.containerWithoutShadow : styles.container,
            {backgroundColor: !selected ? COLORS1.orange : undefined},
            containerStyle,
          ]}
          onPress={() => (onPress ? onPress(card) : null)}>
          {selected ? (
            <LinearGradient
              colors={['#72CCD0', '#87BCBF']}
              style={[styles.container, containerStyle]}>
              <Text style={styles.text}>{card.title}</Text>
            </LinearGradient>
          ) : (
            <Text style={styles.text}>{card.title}</Text>
          )}
        </TouchableOpacity>
      ) : (
        <DraxView
          style={[
            removeShadow ? styles.containerWithoutShadow : styles.container,
            {backgroundColor: !selected ? COLORS1.orange : undefined},
            containerStyle,
          ]}
          {...draxViewProps}>
          {selected ? (
            <LinearGradient
              colors={['#72CCD0', '#87BCBF']}
              style={[styles.container, containerStyle]}>
              <Text style={styles.text}>{card.title}</Text>
            </LinearGradient>
          ) : (
            <Text style={styles.text}>{card.title}</Text>
          )}
        </DraxView>
      )}
      {onRemove && (
        <TouchableOpacity
          style={styles.x}
          onPress={() => (onRemove ? onRemove(card) : null)}>
          <SvgIcon name="x" />
        </TouchableOpacity>
      )}
    </>
  );
};

export default EthosCard;

const styles = StyleSheet.create({
  container: {
    width: 145,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS1.white,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  containerWithoutShadow: {
    width: 145,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS1.white,
    padding: 5,
  },
  text: {
    textAlign: 'center',
    fontFamily: RS_BOLD,
    fontSize: 14,
    color: COLORS1.white,
  },
  x: {
    position: 'absolute',
    right: 0,
    padding: 8,
  },
});
