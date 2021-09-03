import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {COLORS} from '../../services/colors.service';
import {Venue} from '../../types/venues';

const VenueItem: React.FC<{
  venueInfo: Venue;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
}> = venueInfo => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <>
          <ImageBackground
            style={styles.image}
            source={{
              uri: 'https://c8.alamy.com/comp/P06238/green-number-387-on-green-paper-background-P06238.jpg',
            }}
            imageStyle={styles.backgroundImage}
          />

          <View style={styles.footer}>
            <View>
              <Text style={styles.nameText}>Pub Old London</Text>
              <Text style={styles.addressText}>
                Tbilisi, Giorgi Akhvlediani 6
              </Text>
            </View>
            <View style={styles.footerRight}>
              <Fontisto name="rocket" size={20} color={COLORS.black1} />
              <Text style={styles.visitorsCountText}>123</Text>
            </View>
          </View>
        </>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default VenueItem;

const styles = StyleSheet.create({
  container: {
    shadowColor: COLORS.black2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingTop: 10,
    paddingBottom: 11,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: COLORS.white1,
    borderRadius: 6,
  },
  image: {
    flex: 1,
    height: 200,
  },
  backgroundImage: {
    borderRadius: 6,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 13,
  },
  footerLeft: {},
  footerRight: {
    alignItems: 'center',
  },
  nameText: {
    color: COLORS.black1,
    fontSize: 18,
  },
  addressText: {
    color: COLORS.black1,
    fontSize: 12,
    marginTop: 5,
  },
  visitorsCountText: {
    fontSize: 12,
    color: COLORS.black1,
  },
});
