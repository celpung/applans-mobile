import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import StylesFont from '../Utils/StylesFont';
import IcSearch from '../assets/icon/search.png';
import IcDown from '../assets/icon/arrow-down.png';
import Colors from '../Utils/Colors';
import IcCompleted from '../assets/icon/ic-done.png';
import IcDtks from '../assets/icon/ic-dtks.png';
import IcCheckCompleted from '../assets/icon/check-success.png';
import axios from 'axios';
import Button from '../Components/Button';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const TaskScreen = ({navigation}) => {
  const [viewModalAddress, setViewModalAddress] = useState(false);
  const [village, setVillage] = useState('');
  const [dataVillages, setDataVillages] = useState([]);
  const dataVillage = async () => {
    await axios
      .get(
        `http://www.emsifa.com/api-wilayah-indonesia/api/villages/1275060.json`,
      )
      .then(response => {
        setDataVillages(response.data);
      });
  };
  useEffect(() => {
    dataVillage();
  }, []);

  const ModalViewAddress = () => {
    return (
      <TouchableOpacity
        onPress={() => setViewModalAddress(false)}
        activeOpacity={1}
        style={{
          height: height,
          // flex: 1,
          width: width,
          backgroundColor: 'rgba(0,0,0,0.7)',
        }}>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: width,
            height: '80%',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              borderTopStartRadius: 20,
              borderTopEndRadius: 20,
              borderWidth: 1,
              paddingHorizontal: width / 16,
              paddingBottom: width / 16,
              flex: 1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 20,
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
            <View style={{flex: 1}}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={dataVillages}
                renderItem={(item, index) => {
                  return (
                    <TouchableOpacity
                      style={{
                        paddingBottom: 10,
                        marginBottom: 8,
                        borderBottomWidth: 1,
                        borderBottomColor: Colors.grey,
                      }}
                      onPress={() => {
                        setViewModalAddress(false);
                        setVillage(item.item.name);
                      }}>
                      <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                        {item.item.name}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
                keyExtractor={item => item.id}
              />
            </View>
            <Button title="Oke" />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.bgColor}}>
      <ScrollView>
        <View
          style={{
            width: width,
            height: height / 14,
            backgroundColor: Colors.PrimaryColor,
            justifyContent: 'center',
            paddingHorizontal: width / 20,
          }}>
          <Text style={[StylesFont.boldh2, {color: 'white'}]}>Tugas</Text>
        </View>
        <View
          style={{
            height: height / 8,
            backgroundColor: Colors.Light,
            elevation: 5, // Elevation untuk platform Android
            paddingHorizontal: width / 20,
          }}>
          <TouchableOpacity
            onPress={() => setViewModalAddress(true)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              elevation: 5,
              marginTop: 10,
              backgroundColor: Colors.bgColor,
              borderColor: Colors.border,
              // borderWidth: 1,
              borderRadius: 14,
              paddingHorizontal: width / 25,
            }}>
            <TextInput
              editable={false}
              // onChangeText={text => setPassword(text)}
              placeholder="Pilih Kelurahan"
              value={village}
              placeholderTextColor="black"
              style={[
                StylesFont.mediumh5,
                {
                  color: 'black',
                  height: height / 20,
                  flex: 1,
                  paddingHorizontal: width / 40,
                  borderRadius: width / 60,
                },
              ]}
            />
            <Image source={IcDown} />
          </TouchableOpacity>
          <View
            style={{
              marginVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                paddingHorizontal: 10,
                borderRadius: 5,
                paddingVertical: 5,
                backgroundColor: Colors.SecondaryColor,
              }}>
              <Text
                style={{
                  color: Colors.PrimaryColor,
                }}>
                Semua
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                borderRadius: 5,
                paddingVertical: 5,
                backgroundColor: Colors.SecondaryColor,
              }}>
              <Text
                style={{
                  color: Colors.PrimaryColor,
                }}>
                Belum Selesai
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                borderRadius: 5,
                paddingVertical: 5,
                backgroundColor: Colors.SecondaryColor,
              }}>
              <Text
                style={{
                  color: Colors.PrimaryColor,
                }}>
                Terlambat
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                borderRadius: 5,
                paddingVertical: 5,
                backgroundColor: Colors.SecondaryColor,
              }}>
              <Text
                style={{
                  color: Colors.PrimaryColor,
                }}>
                Selesai
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{paddingHorizontal: width / 20, marginVertical: width / 20}}>
          <Text style={[StylesFont.boldh3, {color: 'black'}]}>
            Tugas Hari Ini
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ListDtks')}
            style={{
              borderWidth: 1,
              marginTop: width / 22,
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
                <Text style={[StylesFont.boldh3, {color: 'black'}]}>DTKS</Text>
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
                alignItems: 'center',
              }}>
              <View style={{width: '10%'}}>
                <Image source={IcCheckCompleted} />
              </View>
              <Text style={[StylesFont.regularVerySmall, {color: 'black'}]}>
                Diverifikasi Admin
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ListDtks')}
            style={{
              borderWidth: 1,
              marginTop: width / 22,
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
                <Text style={[StylesFont.boldh3, {color: 'black'}]}>DTKS</Text>
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
                alignItems: 'center',
              }}>
              <View style={{width: '10%'}}>
                <Image source={IcCheckCompleted} />
              </View>
              <Text style={[StylesFont.regularVerySmall, {color: 'black'}]}>
                Diverifikasi Admin
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ListDtks')}
            style={{
              borderWidth: 1,
              marginTop: width / 22,
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
                <Text style={[StylesFont.boldh3, {color: 'black'}]}>DTKS</Text>
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
                alignItems: 'center',
              }}>
              <View style={{width: '10%'}}>
                <Image source={IcCheckCompleted} />
              </View>
              <Text style={[StylesFont.regularVerySmall, {color: 'black'}]}>
                Diverifikasi Admin
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={viewModalAddress}
        onRequestClose={() => {}}>
        {ModalViewAddress()}
      </Modal>
    </SafeAreaView>
  );
};

export default TaskScreen;
