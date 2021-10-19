import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import {COLORS1} from '../../services/colors.service';
import {RS_MEDIUM, RS_SEMI_BOLD} from '../../services/fonts.service';

const AccomplishedIndicator: React.FC<{name: string; percentage: number}> = ({
  name,
  percentage,
}) => {
  return (
    <View>
      <ProgressCircle
        containerStyle={styles.container}
        percent={percentage}
        radius={40}
        borderWidth={4}
        color={COLORS1.orange}
        shadowColor="transparent">
        <View style={styles.innerContent}>
          <Text style={styles.percentageText}>{`${percentage}%`}</Text>
        </View>
      </ProgressCircle>
      <Text style={styles.nameText}>{name}</Text>
    </View>
  );
};

export default AccomplishedIndicator;

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: COLORS1.gray1,
  },
  innerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 500,
  },
  percentageText: {
    fontFamily: RS_MEDIUM,
    fontSize: 26,
    color: COLORS1.gray2,
  },
  nameText: {
    fontFamily: RS_SEMI_BOLD,
    fontSize: 16,
    color: COLORS1.gray2,
    marginTop: 5,
    textAlign: 'center',
  },
});
