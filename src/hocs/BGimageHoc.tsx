import React from 'react';
import {ImageBackground, StatusBar, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Edge, SafeAreaView} from 'react-native-safe-area-context';

const BGimageHoc = <P extends object>(
  Component: React.ComponentType<P>,
  withoutStatusbarMargin?: boolean,
  withoutBottomMargin?: boolean,
) =>
  class WithLoading extends React.Component<P> {
    getMargins = () => {
      if (withoutStatusbarMargin && withoutBottomMargin) {
        return ['right', 'left'];
      } else if (withoutStatusbarMargin) {
        return ['right', 'left', 'bottom'];
      } else if (withoutBottomMargin) {
        return ['right', 'left', 'top'];
      }
      return ['right', 'left', 'top', 'bottom'];
    };

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
                edges={this.getMargins() as ReadonlyArray<Edge>}>
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
