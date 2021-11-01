import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import SvgIcon from '../../components/shared/SvgIcon';
import BGimageHoc from '../../hocs/BGimageHoc';
import {COLORS1} from '../../services/colors.service';
import {WS_BOLD} from '../../services/fonts.service';

const ForYouScreen: React.FC<{navigation: any}> = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate('Sidebar')}>
          <SvgIcon name="profileSettings" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BGimageHoc(ForYouScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 21,
    paddingRight: 21,
  },
  touchable: {
    padding: 10,
  },
  title: {
    color: COLORS1.white,
    fontSize: 30,
    fontFamily: WS_BOLD,
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 80,
  },
  cardsContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});
