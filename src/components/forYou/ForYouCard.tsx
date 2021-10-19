import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS1} from '../../services/colors.service';
import {RS_SEMI_BOLD, WS_BOLD} from '../../services/fonts.service';
import SvgIcon from '../shared/SvgIcon';

const ForYouCard: React.FC<{
  title: string;
  subTitle: string;
  icon: string;
  onPress: () => void;
}> = ({title, subTitle, onPress, icon}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        colors={['#72CCD0', '#87BCBF']}
        style={styles.iconContainer}>
        <SvgIcon name={icon} width={45} height={45} />
      </LinearGradient>
      <View style={styles.rightSide}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 18,
    backgroundColor: COLORS1.white,
    borderRadius: 10,
    marginBottom: 15,
    height: 105,
  },
  iconContainer: {
    width: 95,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    color: COLORS1.gray2,
    fontSize: 18,
    fontFamily: WS_BOLD,
  },
  subTitle: {
    color: COLORS1.green3,
    fontSize: 14,
    fontFamily: RS_SEMI_BOLD,
  },
  rightSide: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 25,
  },
});

export default ForYouCard;
