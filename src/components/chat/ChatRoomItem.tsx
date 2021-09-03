import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {COLORS} from '../../services/colors.service';
import {ChatRoom} from '../../types/chat';

//bec of no API
const isUnread = false;

const ChatRoomItem: React.FC<{
  chatRoomInfo: ChatRoom;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
}> = chatRoomInfo => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isUnread ? COLORS.green1 : COLORS.white1},
      ]}>
      <TouchableWithoutFeedback>
        <>
          <Image
            style={styles.image}
            source={{
              uri: 'https://c8.alamy.com/comp/P06238/green-number-387-on-green-paper-background-P06238.jpg',
            }}
          />
          <View style={styles.info}>
            <View style={styles.infoFirstLineWrapper}>
              <View style={styles.row}>
                <Text style={styles.nameText}>John doe</Text>
                {isUnread && (
                  <View style={styles.countWrapper}>
                    <Text style={styles.countText}>1</Text>
                  </View>
                )}
              </View>
              <Text style={styles.timeText}>10 min ago</Text>
            </View>
            <Text style={styles.messageText}>
              Lorem ipsum dolor sit amet, consectet ...
            </Text>
          </View>
        </>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ChatRoomItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 6,
    paddingBottom: 8,
    paddingLeft: 12,
    paddingRight: 20,
    borderRadius: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 58,
    height: 58,
    borderRadius: 58,
  },
  info: {
    paddingTop: 6,
    paddingLeft: 8,
  },
  infoFirstLineWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameText: {
    fontSize: 16,
    color: COLORS.black3,
  },
  countWrapper: {
    width: 18,
    height: 18,
    borderRadius: 10,
    marginLeft: 15,
    backgroundColor: COLORS.purple1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 10,
    color: COLORS.white1,
  },
  messageText: {
    marginTop: 8,
    fontSize: 14,
    color: COLORS.black3,
    opacity: 0.75,
  },
  timeText: {
    fontSize: 10,
    color: COLORS.brown1,
  },
});
