import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../constants/Colors';
import LottieView from 'lottie-react-native';
import Fireworks from '../assets/animation/firework.json';

const FourTriangles = () => {
  const [blast, setBlast] = useState(false);
  return (
    <View style={styles.mainContainer}>
      {blast && (
        <LottieView
          source={Fireworks}
          autoPlay
          loop
          hardwareAccelerationAndroid
          speed={1}
          style={styles.lottieView}
        />
      )}
    </View>
  );
};

export default FourTriangles;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.8,
    width: '20%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: 'white',
    borderColor: Colors.borderColor,
  },
  lottieView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
  },
});
