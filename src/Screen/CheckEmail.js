import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../Utils/Colors';
import IcBack from '../assets/icon/back.png';
import StylesFont from '../Utils/StylesFont';
import Button from '../Components/Button';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const CheckEmail = ({navigation}) => {
  const [email, setEmail] = useState('');
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
    navigation.navigate('VerifyOtp');
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
            backgroundColor: Colors.SecondaryColor,
            marginVertical: width / 18,

            flexDirection: 'row',
          }}>
          <View
            style={{
              width: 10,
              backgroundColor: Colors.PrimaryColor,
              borderRadius: 10,
            }}
          />
          <View
            style={{
              paddingVertical: width / 28,
              paddingHorizontal: width / 24,
            }}>
            <Text style={[StylesFont.regularVerySmall, {color: Colors.Dark}]}>
              Masukkan Email anda untuk mengirimkan Verifikasi kode lupa
              password
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: width / 16}}>
          <View style={{marginBottom: width / 35}}>
            <Text style={[StylesFont.semiBoldh4, {color: Colors.LightBlack}]}>
              Email
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                //   backgroundColor: Colors.Light,
                //   opacity: '10%',
                borderRadius: 14,
                borderColor: Colors.border,
                borderWidth: 1,
                paddingHorizontal: width / 25,
              }}>
              <TextInput
                placeholder="Masukan email atau username"
                placeholderTextColor="grey"
                onChangeText={text => setEmail(text)}
                value={email}
                style={[
                  StylesFont.semiBoldh5,
                  {
                    color: Colors.Dark,
                    flex: 1,
                    alignItems: 'center',
                    paddingHorizontal: width / 40,
                    //   backgroundColor: Colors.Light,
                    height: height / 15,
                    borderRadius: width / 60,
                  },
                ]}
              />
            </View>
          </View>
          <View style={{marginTop: width / 10}}>
            <Button
              //   isLight={true}
              title="Submit"
              action={() => handleLogin()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckEmail;
