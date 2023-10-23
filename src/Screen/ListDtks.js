import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import IcBack from '../assets/icon/back.png';
import IcHeader from '../assets/header.png';
import IcSearch from '../assets/icon/search.png';
import IcLocation from '../assets/icon/location.png';
import StylesFont from '../Utils/StylesFont';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const image = require('../assets/header.png'); // Memuat gambar
const ListDtks = ({navigation}) => {
  const imageWidth = Image.resolveAssetSource(image).width;
  const imageHeight = Image.resolveAssetSource(image).height;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.bgColor}}>
      <ScrollView>
        <View
          style={{
            width: width,
            height: height / 14,
            backgroundColor: Colors.PrimaryColor,
            // justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: width / 20,
            elevation: 10,
          }}>
          <TouchableOpacity
            style={{width: '12%'}}
            onPress={() => navigation.goBack()}>
            <Image source={IcBack} />
          </TouchableOpacity>
          <Text
            style={[StylesFont.boldh2, {color: 'white', margin: 0, bottom: 3}]}>
            DTKS
          </Text>
        </View>
        <ImageBackground
          source={IcHeader}
          style={{
            width: width,
            paddingHorizontal: width / 20,
            height: imageHeight,
          }}
          resizeMode="cover">
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              backgroundColor: Colors.Light,
              borderColor: Colors.border,
              borderWidth: 1,
              borderRadius: 14,
              paddingHorizontal: width / 25,
            }}>
            <Image source={IcSearch} />
            <TextInput
              // onChangeText={text => setPassword(text)}
              placeholder="Search"
              placeholderTextColor="grey"
              style={[
                StylesFont.semiBoldh5,
                {
                  color: Colors.Dark,
                  height: height / 20,
                  flex: 1,
                  paddingHorizontal: width / 40,
                  borderRadius: width / 60,
                },
              ]}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              marginTop: width / 24,
              //   borderWidth: 1,
              height: 'auto',
            }}>
            <View
              style={{
                // top: -150,
                height: height / 22,
                justifyContent: 'center',
                alignItems: 'center',
                width: width / 14,
              }}>
              <Image
                source={IcLocation}
                style={{width: '100%'}}
                resizeMode="contain"
              />
            </View>
            <Text
              style={[
                StylesFont.boldh5,
                {color: 'white', margin: 0, bottom: 3},
              ]}>
              Kelurahan: Sei. Sikambing
            </Text>
          </View>
        </ImageBackground>
        <View
          style={{
            paddingHorizontal: width / 20,
            paddingVertical: width / 16,
            gap: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('TaskDtks')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: Colors.Light,
              paddingHorizontal: width / 22,
              paddingVertical: 8,
              elevation: 3,
              borderRadius: 10,
            }}>
            <Text
              style={[
                StylesFont.semiBoldSmall,
                {color: 'black', marginRight: 10},
              ]}>
              1.
            </Text>
            <Text style={[StylesFont.semiBoldSmall, {color: 'black'}]}>
              1233456789010113 - Yayan Ruhiyan
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('TaskDtks')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: Colors.Light,
              paddingHorizontal: width / 22,
              paddingVertical: 8,
              elevation: 3,
              borderRadius: 10,
            }}>
            <Text
              style={[
                StylesFont.semiBoldSmall,
                {color: 'black', marginRight: 10},
              ]}>
              2.
            </Text>
            <Text style={[StylesFont.semiBoldSmall, {color: 'black'}]}>
              1233456789010113 - Yayan Ruhiyan
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('TaskDtks')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: Colors.Light,
              paddingHorizontal: width / 22,
              paddingVertical: 8,
              elevation: 3,
              borderRadius: 10,
            }}>
            <Text
              style={[
                StylesFont.semiBoldSmall,
                {color: 'black', marginRight: 10},
              ]}>
              3.
            </Text>
            <Text style={[StylesFont.semiBoldSmall, {color: 'black'}]}>
              1233456789010113 - Janika
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListDtks;
