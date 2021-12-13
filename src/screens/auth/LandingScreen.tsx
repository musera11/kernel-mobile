import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View, Image} from 'react-native';
import Button from '../../components/shared/Button';
import Slider, {SliderItem} from '../../components/shared/Slider';
import navigationService from '../../services/navigation.service';

const LandingScreen = () => {
  const translate = useTranslation().t;
  const DATA: SliderItem[] = [
    {
      title: 'Make Invoicing Easy',
      text: 'Create official invoices in seconds',
      imageName: 'slide2',
      imageOnly: false,
    },
    {
      title: 'Automate Your Invoices',
      text: 'Automate the creation and sending of your recurring invoices',
      imageName: 'slide3',
      imageOnly: false,
    },
    {
      title: 'Control Your Cash Flow',
      text: 'Update your payment status and send reminders for overdue invoices',
      imageName: 'slide4',
      imageOnly: false,
    },
  ];

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('.././../assets/images/logo.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.slider}>
        <Slider imageOnly={true} data={DATA} />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => navigationService.navigate('Template')}
          title={translate('GET_STARTED')}
          color="#fff"
          backgroundColor="#293961"
          top={0}
        />
        <Button
          onPress={() => navigationService.navigate('AddCompany')}
          title={translate('LOG_IN')}
          color="#293961"
          backgroundColor="#fff"
          top={16}
        />
      </View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    top: 23,
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    top: 100,
  },
  slider: {
    flex: 1,
    marginBottom: 50,
  },
});
