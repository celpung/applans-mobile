import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import IcBack from '../assets/icon/back.png';
import IcCheckCompleted from '../assets/icon/check-success.png';
import IcUncheck from '../assets/icon/uncheck.png';
import StylesFont from '../Utils/StylesFont';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const TaskDtks = ({navigation}) => {
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
        <View
          style={{
            paddingHorizontal: width / 20,
            paddingVertical: width / 16,
            gap: 20,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PengenalanTempat')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: Colors.Light,
              paddingHorizontal: width / 22,
              paddingVertical: 10,
              elevation: 3,
              borderRadius: 10,
            }}>
            <View style={{width: '85%', flexDirection: 'row'}}>
              <Text
                style={[
                  StylesFont.semiBoldSmall,
                  {color: 'black', marginRight: 10},
                ]}>
                1.
              </Text>
              <Text style={[StylesFont.semiBoldSmall, {color: 'black'}]}>
                Pengenalan Tempat
              </Text>
            </View>
            <View style={{width: '15%', alignItems: 'flex-end'}}>
              <Image source={IcCheckCompleted} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('KeteranganPerumahan')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: Colors.Light,
              paddingHorizontal: width / 22,
              paddingVertical: 10,
              elevation: 3,
              borderRadius: 10,
            }}>
            <View style={{width: '85%', flexDirection: 'row'}}>
              <Text
                style={[
                  StylesFont.semiBoldSmall,
                  {color: 'black', marginRight: 10},
                ]}>
                2.
              </Text>
              <Text style={[StylesFont.semiBoldSmall, {color: 'black'}]}>
                Keterangan Perumahan
              </Text>
            </View>
            <View style={{width: '15%', alignItems: 'flex-end'}}>
              <Image source={IcCheckCompleted} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('KeteranganSosial')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: Colors.Light,
              paddingHorizontal: width / 22,
              paddingVertical: 10,
              elevation: 3,
              borderRadius: 10,
            }}>
            <View style={{width: '85%', flexDirection: 'row'}}>
              <Text
                style={[
                  StylesFont.semiBoldSmall,
                  {color: 'black', marginRight: 10},
                ]}>
                3.
              </Text>
              <Text style={[StylesFont.semiBoldSmall, {color: 'black'}]}>
                Keterangan Sosial Ekonomi Anggota Rumah Tangga
              </Text>
            </View>
            <View style={{width: '15%', alignItems: 'flex-end'}}>
              <Image source={IcCheckCompleted} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('KepemilikanAset')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: Colors.Light,
              paddingHorizontal: width / 22,
              paddingVertical: 10,
              elevation: 3,
              borderRadius: 10,
            }}>
            <View style={{width: '85%', flexDirection: 'row'}}>
              <Text
                style={[
                  StylesFont.semiBoldSmall,
                  {color: 'black', marginRight: 10},
                ]}>
                4.
              </Text>
              <Text style={[StylesFont.semiBoldSmall, {color: 'black'}]}>
                Kepemilikan Aset dan Keikutsertaan Program
              </Text>
            </View>
            <View style={{width: '15%', alignItems: 'flex-end'}}>
              <Image source={IcCheckCompleted} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('KeteranganPetugas')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: Colors.Light,
              paddingHorizontal: width / 22,
              paddingVertical: 10,
              elevation: 3,
              borderRadius: 10,
            }}>
            <View style={{width: '85%', flexDirection: 'row'}}>
              <Text
                style={[
                  StylesFont.semiBoldSmall,
                  {color: 'black', marginRight: 10},
                ]}>
                5.
              </Text>
              <Text style={[StylesFont.semiBoldSmall, {color: 'black'}]}>
                Keterangan Petugas dan Responden
              </Text>
            </View>
            <View style={{width: '15%', alignItems: 'flex-end'}}>
              <Image source={IcCheckCompleted} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('FotoKTP')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: Colors.Light,
              paddingHorizontal: width / 22,
              paddingVertical: 10,
              elevation: 3,
              borderRadius: 10,
            }}>
            <View style={{width: '85%', flexDirection: 'row'}}>
              <Text
                style={[
                  StylesFont.semiBoldSmall,
                  {color: 'black', marginRight: 10},
                ]}>
                6.
              </Text>
              <Text style={[StylesFont.semiBoldSmall, {color: 'black'}]}>
                Foto KTP, KK, dan keadaan rumah
              </Text>
            </View>
            <View style={{width: '15%', alignItems: 'flex-end'}}>
              <Image source={IcCheckCompleted} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('TaskDtks')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: Colors.Light,
              paddingHorizontal: width / 22,
              paddingVertical: 10,
              elevation: 3,
              borderRadius: 10,
            }}>
            <View style={{width: '85%', flexDirection: 'row'}}>
              <Text
                style={[
                  StylesFont.semiBoldSmall,
                  {color: 'black', marginRight: 10},
                ]}>
                7.
              </Text>
              <Text style={[StylesFont.semiBoldSmall, {color: 'black'}]}>
                Pendapatan dan Pengeluaran
              </Text>
            </View>
            <View style={{width: '15%', alignItems: 'flex-end'}}>
              <Image source={IcUncheck} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskDtks;
