import React, {useState, useRef, useCallback} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import SvgIcon from './SvgIcon';
import {setUserDataAction,} from '../../store/ducks/authDuck';
import {put} from 'redux-saga/effects';

const win = Dimensions.get('window');
const ratio = win.width / 898;

export interface SliderItem {
  title: string;
  text: string;
  imageName: string;
  imageOnly: boolean;
  index?: number;
}

interface Props {
  data: SliderItem[];
}

const Slider = (props: Props) => {
  const [index, setIndex] = useState<number>(0);
  const ref = useRef(null);

  const activate = (indexItem: SliderItem) => {
    const templateArr = [
      'GreenInvoiceTemplate',
      'PinkInvoiceTemplate',
      'PlainInvoiceTemplate',
    ];
    if (indexItem.index && templateArr[indexItem.index]) {
      put(setUserDataAction({templateName: templateArr[indexItem.index]}));
    }
  };

  const renderItem = useCallback(
    ({item}) => (
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.text}</Text>
        {item.imageOnly ? (
          <TouchableOpacity onPress={() => activate(item)}>
            <Image
              resizeMode={'contain'}
              source={item.imageName}
              style={{width: win.width, height: 1255 * ratio}}
            />
          </TouchableOpacity>
        ) : (
          <SvgIcon style={styles.image} name={item.imageName} />
        )}
      </View>
    ),
    [],
  );

  const activeStyle = (itemIndex: number) => {
    return {
      backgroundColor: index === itemIndex ? '#C4C4C4' : '#E0E0E0',
    };
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={ref}
        data={props.data}
        renderItem={renderItem}
        sliderWidth={win.width - 60}
        itemWidth={win.width - 60}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        onSnapToItem={(indexItem: number) => setIndex(indexItem)}
        useScrollView={true}
      />

      <View style={styles.counter}>
        {props.data.map((item, itemIndex) => {
          return (
            <View
              key={itemIndex}
              style={{...styles.counterItem, ...activeStyle(itemIndex)}}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: '#293961',
    fontSize: 18,
  },
  description: {
    color: '#7F88A0',
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    marginTop: 32,
  },
  carouselContainer: {
    marginTop: 30,
  },
  counter: {
    marginTop: 32,
    display: 'flex',
    flexDirection: 'row',
  },
  counterItem: {
    width: 8,
    height: 8,
    borderRadius: 50,
    marginLeft: 3,
    marginRight: 3,
  },
});

export default Slider;
