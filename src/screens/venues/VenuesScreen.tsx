import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Header from '../../components/shared/Header';
import VenueItem from '../../components/venues/VenueItem';
import {Venue} from '../../types/venues';

const VenuesScreen = () => {
  const renderItem: React.FC<{item: Venue}> = ({item}) => {
    return (
      <View style={styles.venueWrapper}>
        <VenueItem venueInfo={item} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={Header}
        data={[{_id: '1'}, {_id: '2'}, {_id: '3'}]}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </View>
  );
};

export default VenuesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  venueWrapper: {
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 30,
    backgroundColor: 'rgba(0,0,0,0)',
  },
});
