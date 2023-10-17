import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import splash1 from '../assets/splashscreen/1.png';
import splash2 from '../assets/splashscreen/2.png';
import splash3 from '../assets/splashscreen/3.png';
import splash4 from '../assets/splashscreen/4.png';

const SplashScreen = ({navigation}) => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [splash1, splash2, splash3, splash4];

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextImageIndex = (imageIndex + 1) % images.length;
      setImageIndex(nextImageIndex);

      if (nextImageIndex === 0) {
        // Navigate to 'LoginScreen' after the last image
        navigateToHome();
      }
    }, 1500); // Adjust the duration as needed (3 seconds per image)

    return () => {
      clearTimeout(timer);
    };
  }, [imageIndex, images]);

  const navigateToHome = () => {
    navigation.replace('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={images[imageIndex]} style={styles.image} />
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
