import React from 'react';
import {View, TouchableOpacity, Image, Dimensions} from 'react-native';
import Colors from '../Utils/Colors';
import HomeOff from '../assets/icon/home-off.png';
import HomeOn from '../assets/icon/home-on.png';
import TugasOn from '../assets/icon/tugas-on.png';
import TugasOff from '../assets/icon/tugas-off.png';
import SettingOff from '../assets/icon/setting-off.png';
import SettingOn from '../assets/icon/setting-on.png';

export default function MyTabBar({state, descriptors, navigation}) {
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: height / 14,
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        elevation: 30,
        borderWidth: 1,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            activeOpacity={0.9}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            style={{
              flex: 1,
              alignItems: 'center',
              width: '30%',
              height: '100%',
              justifyContent: 'center',
            }}
            key={index}>
            {
              /*label*/ [
                isFocused ? (
                  <Image
                    source={HomeOn}
                    style={{width: '30%', height: '100%'}}
                    resizeMode="contain"
                  />
                ) : (
                  <Image
                    source={HomeOff}
                    style={{width: '30%', height: '100%'}}
                    resizeMode="contain"
                  />
                ),
                isFocused ? (
                  <Image
                    source={TugasOn}
                    style={{width: '100%', bottom: height / 40, height: '150%'}}
                    resizeMode="contain"
                  />
                ) : (
                  <Image
                    source={TugasOff}
                    style={{width: '100%', bottom: height / 40, height: '150%'}}
                    resizeMode="contain"
                  />
                ),
                isFocused ? (
                  <Image
                    source={SettingOn}
                    style={{width: '30%', height: '100%'}}
                    resizeMode="contain"
                  />
                ) : (
                  <Image
                    source={SettingOff}
                    style={{width: '30%', height: '100%'}}
                    resizeMode="contain"
                  />
                ),
              ][index]
            }
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
