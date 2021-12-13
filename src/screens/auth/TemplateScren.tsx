import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View, Text} from 'react-native';
import Button from '../../components/shared/Button';
import Slider, {SliderItem} from '../../components/shared/Slider';
import navigationService from '../../services/navigation.service';

const TemplateScreen = () => {
  const translate = useTranslation().t;
  const DATA: SliderItem[] = [
    {
      title: '1',
      text: '',
      imageName: require('../../assets/images/GreenInvoiceTemplate.png'),
      imageOnly: true,
    },
    {
      title: '2',
      text: '',
      imageName: require('../../assets/images/PinkInvoiceTemplate.png'),
      imageOnly: true,
    },
    {
      title: '3',
      text: '',
      imageName: require('../../assets/images/PlainInvoiceTemplate.png'),
      imageOnly: true,
    },
  ];

  return (
    <View style={styles.container}>
      <View>
        <Text style={{...styles.title, fontWeight: 'bold'}}>
          {translate('TemplateScreen.title')}
        </Text>
        <Text style={styles.title}>{translate('TemplateScreen.subTitle')}</Text>
      </View>
      <View style={styles.slider}>
        <Slider data={DATA} />
      </View>
      <View style={styles.button}>
        <Button
          top={20}
          color="#fff"
          backgroundColor="#3FA9F5"
          onPress={() => navigationService.navigate('AddCompany')}
          title={translate('TemplateScreen.buttonText')}
        />
      </View>
    </View>
  );
};

export default TemplateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    top: 23,
    justifyContent: 'space-between',
  },
  title: {
    color: '#293961',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  slider: {
    flex: 1,
  },
});
