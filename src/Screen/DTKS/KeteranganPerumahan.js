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
const KeteranganPerumahan = ({navigation}) => {
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
            Keterangan Perumahan
          </Text>
        </View>
        <View
          style={{paddingHorizontal: width / 20, paddingVertical: width / 16}}>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              1. a. Status penguasaan bangunan tempat tinggal yang ditempati:
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
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              b. Status lahan tempat tinggal yang ditempati:
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
              2. Luas Lantai
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
              3. Jenis lantai terluas
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
              4. a. Jenis dinding terluas
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
              b. Jika (4.a) memilih No. 1, 2 atau 3, Kondisi Dinding:
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
              5. a. Jenis atap terluas
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
              b. Jika (5.a) memilih No. 1, 2, 4, 5, 6, atau 7, Kondisi Atap:
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
              6. Jumlah kamar tidur
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
              7. a. Sumber air minum
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
              b. Jika (7.a) memilih No.3, No. ID pelanggan:
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
              8. Cara memeroleh air minum
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
              9. a. Sumber penerangan utama
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
              b. Jika (9.a) memilih No. 1, daya yang terpasang:
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
              c. Jika (9.a) memilih No.1, No. ID Pelanggan:
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
              10. a. Bahan bakar/Energi utama untuk memasak
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
              b. Jika (7.a) memilih No.3, No. ID pelanggan:
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
              11. a. Pengguna fasilitas tempat buang air besar
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
              b. Jika (10.a) memilih No. 1, ID Pelanggan:
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
              12. Tempat pembuangan air tinja
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

export default KeteranganPerumahan;
