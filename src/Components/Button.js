import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import StylesFont from '../Utils/StylesFont';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Button = ({title, isLight, action}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={action}
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: isLight === true ? 10 : 0,
        height: height / 15,
        padding: 0,
        borderRadius: width / 60,
        backgroundColor: isLight === true ? null : Colors.PrimaryColor,
        // borderWidth: isLight === true ? 1 : 0,
        borderColor: isLight === true ? Colors.PrimaryColor : '',
      }}>
      <Text
        style={[
          isLight === true ? StylesFont.mediumh5 : StylesFont.boldh5,
          {
            color: isLight === true ? Colors.PrimaryColor : Colors.Light,
            margin: 0,
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
