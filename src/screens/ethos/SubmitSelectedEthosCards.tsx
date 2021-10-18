import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS1} from '../../services/colors.service';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  RS_MEDIUM,
  RS_SEMI_BOLD,
  WS_BOLD,
  WS_REGULAR,
} from '../../services/fonts.service';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SvgIcon from '../../components/shared/SvgIcon';
import EthosCard from '../../components/ethos/EthosCard';
import {RootState} from '../../store/configureStore';
import {useSelector} from 'react-redux';

const SubmitSelectedEthosCardsScreen: React.FC<{navigation: any}> = ({
  navigation,
}) => {
  const insets = useSafeAreaInsets();
  const {cardsByDimension} = useSelector(
    (state: RootState) => state.ethosReducer,
  );
  const onNextPress = () => {
    navigation.navigate('ForYou');
  };
  return (
    <>
      <LinearGradient colors={['#516A7B', '#324755']} style={styles.flex1}>
        <View style={[styles.container, {marginTop: insets.top + 40}]}>
          <Text style={styles.majorText}>Congratulations!</Text>
          <Text style={styles.minorText}>
            This is your Ethos Manifest. When you live in alignment with your 7
            Ethos, you will reduce stress and increase your well-being. This is
            your recipe to live your best life.
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          {cardsByDimension.map((card, i) => (
            <View style={styles.texAndCardWrapper} key={`${i}`}>
              <Text style={styles.dimensionText} numberOfLines={1}>
                {card.dimension}
              </Text>
              <EthosCard
                card={card}
                disabled={true}
                selected={true}
                key={card._id}
                containerStyle={styles.card}
              />
            </View>
          ))}
        </ScrollView>
        <View style={styles.footerWrapper}>
          <SvgIcon name="audioWhite" />
          <View />
          <TouchableOpacity style={styles.button} onPress={onNextPress}>
            <Text style={styles.buttonText} onPress={onNextPress}>
              NEXT
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </>
  );
};

export default SubmitSelectedEthosCardsScreen;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    marginBottom: 13,
    paddingLeft: 34,
    paddingRight: 34,
  },
  majorText: {
    fontFamily: WS_BOLD,
    fontSize: 18,
    color: COLORS1.white,
    textAlign: 'center',
  },
  minorText: {
    fontFamily: WS_REGULAR,
    fontSize: 18,
    color: COLORS1.white,
    textAlign: 'center',
    lineHeight: 25,
  },
  scrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 25,
  },
  texAndCardWrapper: {
    alignItems: 'center',
    paddingTop: 16 + 5,
    marginTop: 22,
  },
  dimensionText: {
    textAlign: 'center',
    color: COLORS1.white,
    fontSize: 16,
    fontFamily: RS_SEMI_BOLD,
    letterSpacing: 0.8,
    position: 'absolute',
    width: 120,
  },
  card: {
    margin: 7,
  },
  footerWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 53,
    paddingLeft: 31,
    paddingRight: 33,
    marginBottom: 50,
  },
  button: {
    borderColor: COLORS1.white,
    width: 123,
    height: 52,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontFamily: RS_MEDIUM,
    color: COLORS1.white,
  },
});
