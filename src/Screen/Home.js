import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import StylesFont from '../Utils/StylesFont';
import IcHeader from '../assets/header.png';
import IcAplans from '../assets/AplansWhite.png';
import IcCard from '../assets/card.png';
import Ava from '../assets/icon/ava.png';
import IcSearch from '../assets/icon/search.png';
import IcRight from '../assets/icon/right.png';
import Colors from '../Utils/Colors';

const image = require('../assets/header.png'); // Memuat gambar
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const Home = () => {
  // Mendapatkan dimensi gambar
  const imageWidth = Image.resolveAssetSource(image).width;
  const imageHeight = Image.resolveAssetSource(image).height;

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={IcHeader}
        style={{
          width: width,
          paddingHorizontal: width / 20,
          height: imageHeight,
        }}
        resizeMode="cover">
        <View style={{paddingHorizontal: 5}}>
          <Image
            source={IcAplans}
            style={{width: width / 2.1, height: height / 18, marginTop: 8}}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '15%',
              alignItems: 'center',
              justifyContent: 'center',
              height: height / 12,
              flexDirection: 'row',
            }}>
            <Image
              source={Ava}
              style={{width: '100%', height: '100%'}}
              resizeMode="contain"
            />
          </View>
          <TouchableOpacity
            style={{
              width: '85%',
              paddingHorizontal: width / 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{flexDirection: 'column'}}>
              <Text style={[StylesFont.boldh5, {color: Colors.Light}]}>
                Yayan Ruhian
              </Text>
              <Text style={[StylesFont.regularh5, {color: Colors.Light}]}>
                Linjamsos
              </Text>
            </View>
            <View>
              <Image source={IcRight} />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
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
            // inlineImageLeft={iconpassword}
            style={[
              StylesFont.semiBoldh5,
              {
                color: Colors.Dark,
                //   backgroundColor: Colors.Light,
                height: height / 20,
                flex: 1,
                paddingHorizontal: width / 40,
                borderRadius: width / 60,
              },
            ]}
          />
        </View>
      </ImageBackground>
      <View
        style={{
          marginTop: width / 20,
          paddingHorizontal: width / 20,
        }}>
        <Text style={[StylesFont.boldh3, {color: 'black'}]}>
          Statististik Pekerjaan
        </Text>
        <View
          style={{
            flexDirection: 'row',
            // width: width,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '48%',
            }}>
            <ImageBackground
              style={{
                width: '100%',
                height: height / 8,
                alignItems: 'center',
                flexDirection: 'row',
              }}
              source={IcCard}
              resizeMode="contain">
              <View
                style={{
                  height: '60%',
                  paddingLeft: 10,
                  flexDirection: 'column',
                  borderRightWidth: 2,
                  borderColor: Colors.Light,
                  width: '50%',
                }}>
                <Text
                  style={[StylesFont.regularVerySmall, {color: Colors.Light}]}>
                  Tugas Harian
                </Text>
                <Text style={[StylesFont.boldh3, {color: Colors.Light}]}>
                  1/2
                </Text>
              </View>
              <View
                style={{
                  height: '60%',
                  paddingLeft: 10,
                  flexDirection: 'column',
                  width: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bottom: 5,
                }}>
                <Text style={[StylesFont.boldh1, {color: Colors.Light}]}>
                  50%
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View
            style={{
              width: '48%',
            }}>
            <ImageBackground
              style={{
                width: '100%',
                height: height / 8,
                alignItems: 'center',
                flexDirection: 'row',
              }}
              source={IcCard}
              resizeMode="contain">
              <View
                style={{
                  height: '60%',
                  paddingLeft: 8,
                  flexDirection: 'column',
                  borderRightWidth: 2,
                  borderColor: Colors.Light,
                  width: '50%',
                }}>
                <Text
                  style={[StylesFont.regularVerySmall, {color: Colors.Light}]}>
                  Tugas Mingguan
                </Text>
                <Text style={[StylesFont.boldh3, {color: Colors.Light}]}>
                  1/2
                </Text>
              </View>
              <View
                style={{
                  height: '60%',
                  paddingLeft: 10,
                  flexDirection: 'column',
                  width: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bottom: 5,
                }}>
                <Text style={[StylesFont.boldh1, {color: Colors.Light}]}>
                  50%
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text style={[StylesFont.boldh3, {color: 'black'}]}>
            Tugas Harian
          </Text>
          <Text style={[StylesFont.regularSmall, {color: Colors.PrimaryColor}]}>
            Lihat Semua
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
