import React, {useEffect} from 'react';
import {View, Text,Image, StyleSheet, StatusBar} from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = ({navigation}) => {
  StatusBar.setBackgroundColor('#272727');
  StatusBar.setBarStyle('light-content');

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/splash_img_blue.png')}/>
      <Text style={styles.displayLarge}>Alif Notes Series</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#272727',
    padding: 20.0,
    paddingTop: StatusBar.currentHeight || 0,
  },
  img:{
    width:300,
    height:300,
  },
  animationContainer: {
    height: 350, // Adjust the spacing between animation and text as needed
  },
  displayLarge: {
    fontSize: 35.0,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SplashScreen;
