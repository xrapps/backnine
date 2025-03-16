import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {useNavigation} from '@react-navigation/native';
import BackNineHeader from '../components/BackNineHeader';
import BackNineComponent from '../components/BackNineComponent';
import BackgroundImage from '../assets/background.png';

export default function () {
  const navigation = useNavigation();

  const handleNavigateHome = () => {
    navigation.navigate('DrawerNavigator', {screen: 'BackNineHomeScreen'});
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <BackNineHeader />

      <Text style={styles.text}>Спасибо за резерв!</Text>

      <View style={styles.imageBackground}>
        <Image
          style={styles.image}
          source={require('../assets/success_icon.png')}
        />
      </View>

      <BackNineComponent
        text="На главную"
        style={styles.button}
        onPress={handleNavigateHome}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: COLORS.white,
  },
  button: {
    position: 'absolute',
    bottom: 50,
  },
  text: {
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: FONTS.black,
    fontSize: 40,
    marginTop: '25%',
    paddingVertical: 20,
  },
  image: {
    width: width * 0.5,
    height: width * 0.5,
    alignSelf: 'center',
    objectFit: 'contain',
  },
  imageBackground: {
    width: width,
    paddingVertical: 20,
    marginTop: 20,
  },
});
