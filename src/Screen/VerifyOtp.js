import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useState, useRef} from 'react';
import StylesFont from '../Utils/StylesFont';
import Colors from '../Utils/Colors';
import IcBack from '../assets/icon/back.png';
import Illustration from '../assets/icon/illustration1.png';
import Button from '../Components/Button';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const VerifyOtp = ({navigation}) => {
  const [firstCode, setFirstCode] = useState('');
  const [secondCode, setSecondCode] = useState('');
  const [thirdCode, setThirdCode] = useState('');
  const [fourthCode, setFourthCode] = useState('');
  const firstInput = text => {
    setFirstCode(text);
    if (text.length === 1) {
      second.current.focus();
    }
  };

  const secondInput = text => {
    setSecondCode(text);
    if (text.length === 1) {
      third.current.focus();
    }
  };

  const thirdInput = text => {
    setThirdCode(text);
    if (text.length === 1) {
      fourth.current.focus();
    }
  };

  const fourthInput = text => {
    setFourthCode(text);
    if (text.length < 1) {
      third.current.focus();
    }
  };

  const first = useRef();
  const second = useRef();
  const third = useRef();
  const fourth = useRef();
  const handleLogin = async () => {
    // await axios
    //   .post("http://192.168.100.36:8080/api/login", {
    //     email: email,
    //     password: password,
    //   })
    //   .then(async (res) => {
    //     if (res.data.data.status === 200) {
    //       await AsyncStorage.setItem("Token", res.data.data.token);
    //       navigation.navigate("Home");
    //     } else {
    //       Alert.alert("Gagal", "Login Gagal");
    //     }
    //   });
    navigation.navigate('ChangePassword');
  };
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
          }}>
          <TouchableOpacity
            style={{width: '12%'}}
            onPress={() => navigation.goBack()}>
            <Image source={IcBack} />
          </TouchableOpacity>
          <Text
            style={[StylesFont.boldh2, {color: 'white', margin: 0, bottom: 3}]}>
            Lupa Password
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: height / 2.8,
            width: width,
          }}>
          <Image
            source={Illustration}
            style={{width: '70%'}}
            resizeMode="contain"
          />
        </View>
        <View style={{paddingHorizontal: width / 20}}>
          <View style={{alignItems: 'center', flexDirection: 'column'}}>
            <Text style={[StylesFont.boldh5, {color: 'black'}]}>
              Verifikasi Kode
            </Text>
            <Text
              style={[
                StylesFont.regularSmall,
                {
                  color: 'black',
                  textAlign: 'center',
                  paddingVertical: width / 20,
                },
              ]}>
              Kami telah mengirim kode verifikasi ke email anda, silahkan
              masukkan kode verifikasi.
            </Text>
            <Text style={[StylesFont.boldh5, {color: 'black'}]}>
              cecepsuparman@gmail.com
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 20,
            }}>
            <View
              style={{
                width: width,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: width / 20,
              }}>
              <TextInput
                style={styles.inputOtp}
                maxLength={1}
                keyboardType={'numeric'}
                placeholder={'-'}
                onChangeText={text => firstInput(text)}
                ref={first}
              />
              <TextInput
                style={styles.inputOtp}
                keyboardType={'numeric'}
                placeholder={'-'}
                ref={second}
                onChangeText={text => secondInput(text)}
                onKeyPress={({nativeEvent}) => {
                  if (nativeEvent.key === 'Backspace') {
                    first.current.focus();
                  }
                }}
              />
              <TextInput
                style={styles.inputOtp}
                maxLength={1}
                keyboardType={'numeric'}
                placeholder={'-'}
                ref={third}
                onChangeText={text => thirdInput(text)}
                onKeyPress={({nativeEvent}) => {
                  if (nativeEvent.key === 'Backspace') {
                    second.current.focus();
                  }
                }}
              />
              <TextInput
                style={styles.inputOtp}
                maxLength={1}
                keyboardType={'numeric'}
                placeholder={'-'}
                ref={fourth}
                onChangeText={text => fourthInput(text)}
                onKeyPress={({nativeEvent}) => {
                  if (nativeEvent.key === 'Backspace') {
                    third.current.focus();
                  }
                }}
              />
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={[StylesFont.boldh5, {color: 'black'}]}>02:00</Text>
          </View>
          <View style={{marginTop: width / 10}}>
            <Button
              //   isLight={true}
              title="Submit"
              action={() => handleLogin()}
            />
          </View>
          <View>
            <Button
              isLight={true}
              title="Ubah Email?"
              action={() => navigation.navigate('CheckEmail')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  inputOtp: [
    StylesFont.boldh1,
    {
      justifyContent: 'center',
      alignItems: 'center',
      width: width / 8,
      height: '100%',
      borderWidth: 1,
      backgroundColor: '#fff',
      borderRadius: 6,
      borderColor: Colors.Dark,
      textAlign: 'center',
      color: 'black',
    },
  ],
});
export default VerifyOtp;
