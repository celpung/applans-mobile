import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../Utils/Colors';
import StylesFont from '../../Utils/StylesFont';
import IcBack from '../../assets/icon/back.png';
import Checklist from '../../assets/icon/checklist.png';
import CheckBox from '@react-native-community/checkbox';
import Button from '../../Components/Button';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const KeteranganSosial = ({navigation}) => {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const handleCheckboxChange = checkboxName => {
    if (checkboxName === 'checkbox1') {
      setCheckbox1(true);
      setCheckbox2(false);
    } else if (checkboxName === 'checkbox2') {
      setCheckbox1(false);
      setCheckbox2(true);
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.bgColor}}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            Keterangan Sosial Ekonomi ....
          </Text>
        </View>
        <View
          style={{paddingHorizontal: width / 20, paddingVertical: width / 16}}>
          <Text style={[StylesFont.boldh5, {color: 'black'}]}>No. urut:1</Text>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              a. Nama Anggota Keluarga:
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  id="provinsisesuai"
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  id="provinsisesuai"
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>b. NIK</Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              c. Hubungan dengan kepala keluarga
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              d. Nomor urut keluarga
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              e. Hubungan dengan anggota keluarga
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              f. Jenis kelamin
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              g. Umur (Tahun)
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              h. Status Perkawinan
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              i. Kepemilikan akta/buku nikah atau akta cerai
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              j. Tercantum dalam Kartu Keluarga (KK) di rumah tangga ini
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              k. Kepemilikan Kartu Identitas
            </Text>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>a. KK01</Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              l. Untuk Wanita Usia 10-49 tahun dan KOL (8) = 2 Status kehamilan
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              m. Jenis cacat
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              n. Penyakit kronis/menahun
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                borderWidth: 0.8,
                borderStyle: 'dashed',
                borderColor: Colors.PrimaryColor,
                width: '25%',
              }}
            />
            <View
              style={{
                alignItems: 'center',
                width: '50%',
              }}>
              <Text
                style={[
                  ,
                  StylesFont.mediumh5,
                  {color: Colors.PrimaryColor, bottom: 3},
                ]}>
                untuk ART 5 tahun ke atas
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.8,
                borderStyle: 'dashed',
                borderColor: Colors.PrimaryColor,
                width: '25%',
              }}
            />
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              o. Partisipasi Sekolah
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <Text style={[StylesFont.mediumh5, {color: Colors.PrimaryColor}]}>
            Jika KOL (15) 1 atau 2
          </Text>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              o.1. Jenjang dan Jenis Pendidikan tertinggi yang pernah/sedang
              diduduki
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              o.2. Kelas tertinggi yang pernah/sedang diduduki
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              o.3. Ijazah tertinggi yang dimiliki
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              r. Bekerja/membantu bekerja selama seminggu yang lalu
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              s. Lapangan usaha dari pekerjaan utama
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              t. Status kedudukan dalam pekerjaan utama
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              borderWidth: 0.8,
              width: width,
              borderColor: Colors.PrimaryColor,
              borderStyle: 'dashed',
            }}
          />
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              t. Keterangan Keberadaan Anggota Rumah Tangga
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <Text style={[StylesFont.boldh5, {color: Colors.PrimaryColor}]}>
            Keikutsertaan Program
          </Text>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              u. KPS/ KKS
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              v. KIS/ PBI JKN
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              w. KIP/ BSM
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>x. PKH</Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              y. Raskin/ Rastra
            </Text>
            <View
              style={{
                width: '100%',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
                Sumatera Utara
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={[StylesFont.mediumSmall, {color: Colors.DarkGrey}]}>
                Keterangan
              </Text>

              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  onPress={() => handleCheckboxChange('checkbox1')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox1
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox1 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Sesuai
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleCheckboxChange('checkbox2')}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width / 24,
                    height: width / 24,
                    backgroundColor: checkbox2
                      ? Colors.PrimaryColor
                      : 'transparent',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: Colors.PrimaryColor,
                  }}>
                  {checkbox2 && <Image source={Checklist} />}
                </TouchableOpacity>
                <Text style={[StylesFont.mediumSmall, {color: Colors.Black}]}>
                  Tidak Sesuai
                </Text>
              </View>
            </View>
          </View>
          <Button title="Simpan" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default KeteranganSosial;
