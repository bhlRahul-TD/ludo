import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import Wrapper from '../components/Wrapper';
import Menu from '../assets/images/menu.png';
import {deviceHeight} from '../constants/Scaling';

const LudoboardScreen = () => {
  return (
    <Wrapper>
      <TouchableOpacity style={{position: 'absolute', top: 45, left: 20}}>
        <Image source={Menu} style={{width: 36, height: 36}} />
      </TouchableOpacity>
      <View style={styles.container}></View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: deviceHeight * 0.5,
    width: deviceHeight,
    backgroundColor: 'lightgreen',
  },
});

export default LudoboardScreen;
