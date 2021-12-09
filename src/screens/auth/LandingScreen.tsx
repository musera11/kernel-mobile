import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Button from '../../components/shared/Button';
import Slider, {SliderItem} from '../../components/shared/Slider';

const LandingScreen = () => {
  const DATA:SliderItem[] = [
    {
      title: 'Make Invoicing Easy',
      text: 'Create official invoices in seconds',
      imageName: 'slide2'
    }, 
    {
      title: 'Automate Your Invoices',
      text: 'Automate the creation and sending of your recurring invoices',
      imageName: 'slide3'
    },
    {
      title: 'Control Your Cash Flow',
      text: 'Update your payment status and send reminders for overdue invoices',
      imageName: 'slide4'
    }
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
        <Slider data={DATA}/>
      </View>
      <View style={styles.button}>
        <Button
          title="Get Started"
          color="#fff"
          backgroundColor="#293961"
          top={0}
        />
        <Button
          title="Log In"
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
    top: 130,
  },
  slider: {
    flex: 1,
    marginBottom: 50,
  },
});
