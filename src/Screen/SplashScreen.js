import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import splash4 from '../assets/splashscreen/4.png';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    // Set a timeout to navigate after 3 seconds (3000 milliseconds)
    const timeout = setTimeout(() => {
      navigation.navigate('LoginScreen'); // Gantilah 'NextScreen' dengan nama layar tujuan Anda.
    }, 3000);

    // Clean up the timeout if the component unmounts before the timeout finishes
    return () => clearTimeout(timeout);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image source={splash4} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default SplashScreen;
