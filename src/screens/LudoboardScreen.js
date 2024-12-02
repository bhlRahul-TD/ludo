import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import Wrapper from '../components/Wrapper';
import Menu from '../assets/images/menu.png';
import {deviceHeight, deviceWidth} from '../constants/Scaling';
import Dice from '../components/Dice';
import {Colors} from '../constants/Colors';

const LudoboardScreen = () => {
  return (
    <Wrapper>
      <TouchableOpacity style={{position: 'absolute', top: 60, left: 20}}>
        <Image source={Menu} style={{width: 36, height: 36}} />
      </TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.flexRow}>
          <Dice color={Colors.green} />
          <Dice color={Colors.yellow} rotate />
        </View>
        <View style={styles.ludoBoard}>
          <View style={styles.plotContainer}></View>
        </View>
        <View style={styles.flexRow}>
          <Dice color={Colors.red} />
          <Dice color={Colors.blue} rotate />
        </View>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: deviceHeight * 0.5,
    width: deviceHeight,
    paddingHorizontal: 10,
  },
  flexRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 22,
  },
  ludoBoard: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    padding: 10,
    backgroundColor: 'red',
  },
  plotContainer: {
    width: '100%',
    height: '40%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#ccc',
  },
});

export default LudoboardScreen;
