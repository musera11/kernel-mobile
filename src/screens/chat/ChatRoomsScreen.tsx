import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ChatRoomItem from '../../components/chat/ChatRoomItem';
import ChatRoomsSearch from '../../components/chat/ChatRoomsSearch';
import Header from '../../components/shared/Header';
import {COLORS} from '../../services/colors.service';
import {ChatRoom} from '../../types/chat';

const VenuesScreen = () => {
  const renderItem: React.FC<{item: ChatRoom}> = ({item}) => {
    return (
      <View style={styles.chatRoomWrapper}>
        <ChatRoomItem chatRoomInfo={item} />
      </View>
    );
  };

  const renderListHeader = () => {
    return (
      <>
        <Header />
        <ChatRoomsSearch />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={renderListHeader}
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
    backgroundColor: COLORS.gray1,
  },
  chatRoomWrapper: {
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 6,
    backgroundColor: 'rgba(0,0,0,0)',
  },
});
