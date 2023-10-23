import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Colors from '../Utils/Colors';
import StylesFont from '../Utils/StylesFont';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const PertanyaanJawaban = ({data}) => {
  const [nomor, pertanyaan, value] = data;
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
    <View style={{flexDirection: 'column', marginVertical: 10}}>
      <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
        {nomor}.{pertanyaan}
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
        <Text style={[StylesFont.mediumh5, {color: 'black'}]}>{value}</Text>
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

        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          <TouchableOpacity
            id="provinsisesuai"
            onPress={() => handleCheckboxChange('checkbox1')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: width / 24,
              height: width / 24,
              backgroundColor: checkbox1 ? Colors.PrimaryColor : 'transparent',
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
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          <TouchableOpacity
            id="provinsisesuai"
            activeOpacity={0.7}
            onPress={() => handleCheckboxChange('checkbox2')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: width / 24,
              height: width / 24,
              backgroundColor: checkbox2 ? Colors.PrimaryColor : 'transparent',
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
  );
};

export default PertanyaanJawaban;
