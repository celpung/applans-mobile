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
  ScrollView,
} from 'react-native';
import StylesFont from '../Utils/StylesFont';
import IcHeader from '../assets/header.png';
import IcAplans from '../assets/AplansWhite.png';
import IcCard from '../assets/card.png';
import Ava from '../assets/icon/ava.png';
import IcSearch from '../assets/icon/search.png';
import IcRight from '../assets/icon/right.png';
import IcDtks from '../assets/icon/ic-dtks.png';
import IcBeasiswa from '../assets/icon/ic-beasiswa.png';
import IcCompleted from '../assets/icon/ic-done.png';
import IcCheckCompleted from '../assets/icon/check-success.png';
import IcClock from '../assets/icon/clock.png';
import IcCheckProcess from '../assets/icon/check-process.png';
import IcProcess from '../assets/icon/ic-process.png';
import Colors from '../Utils/Colors';

const image = require('../assets/header.png'); // Memuat gambar
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const HomeScreen = ({navigation}) => {
  // Mendapatkan dimensi gambar
  const imageWidth = Image.resolveAssetSource(image).width;
  const imageHeight = Image.resolveAssetSource(image).height;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.bgColor}}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          {/* <View
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
          </View> */}
        </ImageBackground>
        <View
          style={{
            flex: 1,
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
                    style={[
                      StylesFont.regularVerySmall,
                      {color: Colors.Light},
                    ]}>
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
                    style={[
                      StylesFont.regularVerySmall,
                      {color: Colors.Light},
                    ]}>
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
            <Text
              onPress={() => navigation.navigate('TaskScreen')}
              style={[StylesFont.regularSmall, {color: Colors.PrimaryColor}]}>
              Lihat Semua
            </Text>
          </View>
          <View style={{gap: width / 30, paddingVertical: width / 30}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ListDtks')}
              style={{
                borderWidth: 1,
                // marginTop: width / 22,
                borderRadius: 8,
                backgroundColor: Colors.Light,
                borderColor: Colors.border,
                elevation: 2,
              }}>
              <View
                style={{
                  paddingHorizontal: width / 20,
                  paddingVertical: width / 20,
                  flexDirection: 'row',
                  width: '100%',
                }}>
                <View
                  style={{
                    width: '20%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={IcDtks} />
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    width: '60%',
                    paddingHorizontal: 8,
                  }}>
                  <Text style={[StylesFont.boldh3, {color: 'black'}]}>
                    DTKS
                  </Text>
                  <Text style={[StylesFont.mediumVerySmall, {color: 'black'}]}>
                    Sei. Sikambing
                  </Text>
                </View>
                <View
                  style={{
                    // borderWidth: 1,
                    // justifyContent: '',
                    width: '20%',
                    // alignItems: 'flex-start',
                  }}>
                  <Image
                    source={IcCompleted}
                    style={{width: '100%', bottom: width / 30}}
                    resizeMode="contain"
                  />
                </View>
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  paddingHorizontal: width / 20,
                  paddingVertical: width / 40,
                  borderTopColor: Colors.border,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                  }}>
                  <View style={{width: '10%'}}>
                    <Image
                      source={IcClock}
                      style={{width: '100%'}}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[StylesFont.regularVerySmall, {color: 'black'}]}>
                    30 Sept - 1 Okt 2023
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                    justifyContent: 'flex-end',
                  }}>
                  <View style={{width: '10%'}}>
                    <Image source={IcCheckCompleted} />
                  </View>
                  <Text style={[StylesFont.regularVerySmall, {color: 'black'}]}>
                    Diverifikasi Admin
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ListDtks')}
              style={{
                borderWidth: 1,
                // marginTop: width / 22,
                borderRadius: 8,
                backgroundColor: Colors.Light,
                borderColor: Colors.border,
                elevation: 2,
              }}>
              <View
                style={{
                  paddingHorizontal: width / 20,
                  paddingVertical: width / 20,
                  flexDirection: 'row',
                  width: '100%',
                }}>
                <View
                  style={{
                    width: '20%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={IcDtks} />
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    width: '60%',
                    paddingHorizontal: 8,
                  }}>
                  <Text style={[StylesFont.boldh3, {color: 'black'}]}>
                    DTKS
                  </Text>
                  <Text style={[StylesFont.mediumVerySmall, {color: 'black'}]}>
                    Sei. Sikambing
                  </Text>
                </View>
                <View
                  style={{
                    // borderWidth: 1,
                    // justifyContent: '',
                    width: '20%',
                    // alignItems: 'flex-start',
                  }}>
                  <Image
                    source={IcCompleted}
                    style={{width: '100%', bottom: width / 30}}
                    resizeMode="contain"
                  />
                </View>
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  paddingHorizontal: width / 20,
                  paddingVertical: width / 40,
                  borderTopColor: Colors.border,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                  }}>
                  <View style={{width: '10%'}}>
                    <Image
                      source={IcClock}
                      style={{width: '100%'}}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[StylesFont.regularVerySmall, {color: 'black'}]}>
                    30 Sept - 1 Okt 2023
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                    justifyContent: 'flex-end',
                  }}>
                  <View style={{width: '10%'}}>
                    <Image source={IcCheckCompleted} />
                  </View>
                  <Text style={[StylesFont.regularVerySmall, {color: 'black'}]}>
                    Diverifikasi Admin
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('ListDtks')}
              style={{
                borderWidth: 1,
                // marginTop: width / 22,
                borderRadius: 8,
                backgroundColor: Colors.Light,
                borderColor: Colors.border,
                elevation: 2,
              }}>
              <View
                style={{
                  paddingHorizontal: width / 20,
                  paddingVertical: width / 20,
                  flexDirection: 'row',
                  width: '100%',
                }}>
                <View
                  style={{
                    width: '20%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={IcDtks} />
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    width: '60%',
                    paddingHorizontal: 8,
                  }}>
                  <Text style={[StylesFont.boldh3, {color: 'black'}]}>
                    DTKS
                  </Text>
                  <Text style={[StylesFont.mediumVerySmall, {color: 'black'}]}>
                    Sei. Sikambing
                  </Text>
                </View>
                <View
                  style={{
                    // borderWidth: 1,
                    // justifyContent: '',
                    width: '20%',
                    // alignItems: 'flex-start',
                  }}>
                  <Image
                    source={IcCompleted}
                    style={{width: '100%', bottom: width / 30}}
                    resizeMode="contain"
                  />
                </View>
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  paddingHorizontal: width / 20,
                  paddingVertical: width / 40,
                  borderTopColor: Colors.border,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                  }}>
                  <View style={{width: '10%'}}>
                    <Image
                      source={IcClock}
                      style={{width: '100%'}}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={[StylesFont.regularVerySmall, {color: 'black'}]}>
                    30 Sept - 1 Okt 2023
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 5,
                    justifyContent: 'flex-end',
                  }}>
                  <View style={{width: '10%'}}>
                    <Image source={IcCheckCompleted} />
                  </View>
                  <Text style={[StylesFont.regularVerySmall, {color: 'black'}]}>
                    Diverifikasi Admin
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
