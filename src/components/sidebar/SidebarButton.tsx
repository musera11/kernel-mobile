import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS1} from '../../services/colors.service';
import {F_SEMI_BOLD} from '../../services/fonts.service';

const SidebarButton: React.FC<{
  title?: string;
  value?: string;
  onPress?: () => void;
}> = ({title, value, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.rightSide}>
        <Text style={styles.title}>{value}</Text>
        <Ionicons
          size={22}
          color={COLORS1.green3}
          name="chevron-forward-outline"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: COLORS1.white,
    borderRadius: 15,
    marginBottom: 10,
    height: 44,
  },
  title: {
    color: COLORS1.green3,
    fontSize: 13,
    fontFamily: F_SEMI_BOLD,
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SidebarButton;
