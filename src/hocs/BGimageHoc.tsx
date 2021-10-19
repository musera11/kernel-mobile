import React from 'react';
import {ImageBackground, StatusBar, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';

const BGimageHoc = <P extends object>(
  Component: React.ComponentType<P>,
  withoutStatusbarMargin?: boolean,
) =>
  class WithLoading extends React.Component<P> {
    render() {
      const {...props} = this.props;
      return (
        <>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          <ImageBackground
            resizeMethod={'auto'}
            source={require('../assets/images/auth_background.png')}
            style={styles.coverImage}
            imageStyle={styles.image}>
            <LinearGradient
              colors={['rgba(0,0,0,0)', '#324755']}
              style={styles.container}>
              <SafeAreaView
                style={styles.container}
                edges={
                  withoutStatusbarMargin
                    ? ['right', 'left', 'bottom']
                    : ['right', 'left', 'top', 'bottom']
                }>
                <Component {...(props as P)} />
              </SafeAreaView>
            </LinearGradient>
          </ImageBackground>
        </>
      );
    }
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  coverImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 0,
  },
  image: {
    resizeMode: 'cover',
    alignSelf: 'flex-end',
  },
});

export default BGimageHoc;
