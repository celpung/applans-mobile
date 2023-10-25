import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import StylesFont from '../Utils/StylesFont';
import Colors from '../Utils/Colors';
import IcBack from '../assets/icon/back.png';
import Button from '../Components/Button';
import IcEye from '../assets/icon/eye.png';
import IcEyeOff from '../assets/icon/eyeoff.png';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const ChangePassword = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [passwordConfVisibility, setPasswordConfVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const [rightIconConf, setRightIconConf] = useState('eye');
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
    navigation.navigate('LoginScreen');
  };
  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };
  const handlePasswordConfVisibility = () => {
    if (rightIconConf === 'eye') {
      setRightIconConf('eye-off');
      setPasswordConfVisibility(!passwordConfVisibility);
    } else if (rightIconConf === 'eye-off') {
      setRightIconConf('eye');
      setPasswordConfVisibility(!passwordConfVisibility);
    }
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
            Password Baru
          </Text>
        </View>
        <View style={{marginBottom: width / 28, paddingHorizontal: width / 20}}>
          <Text
            style={[
              StylesFont.semiBoldh4,
              {color: Colors.LightBlack, marginVertical: width / 28},
            ]}>
            Password
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: Colors.Light,
              borderColor: Colors.border,
              borderWidth: 1,
              borderRadius: 14,
              paddingHorizontal: width / 25,
            }}>
            <TextInput
              textContentType="password"
              onChangeText={text => setPassword(text)}
              placeholder="Masukkan Password"
              placeholderTextColor="grey"
              value={password}
              secureTextEntry={passwordVisibility}
              // inlineImageLeft={iconpassword}
              style={[
                StylesFont.semiBoldh5,
                {
                  color: 'black',
                  //   backgroundColor: Colors.Light,
                  height: height / 15,
                  flex: 1,
                  paddingHorizontal: width / 40,
                  borderRadius: width / 60,
                },
              ]}
            />
            <TouchableOpacity
              style={{width: width / 18}}
              onPress={handlePasswordVisibility}>
              {rightIcon === 'eye' ? (
                <Image source={IcEye} />
              ) : (
                <Image source={IcEyeOff} />
              )}
            </TouchableOpacity>
          </View>
          <Text
            style={[
              StylesFont.semiBoldh4,
              {color: Colors.LightBlack, marginVertical: width / 28},
            ]}>
            Password
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: Colors.Light,
              borderColor: Colors.border,
              borderWidth: 1,
              borderRadius: 14,
              paddingHorizontal: width / 25,
            }}>
            <TextInput
              textContentType="password"
              onChangeText={text => setPasswordConf(text)}
              placeholder="Masukkan Password"
              placeholderTextColor="grey"
              value={passwordConf}
              secureTextEntry={passwordConfVisibility}
              // inlineImageLeft={iconpassword}
              style={[
                StylesFont.semiBoldh5,
                {
                  color: 'black',
                  //   backgroundColor: Colors.Light,
                  height: height / 15,
                  flex: 1,
                  paddingHorizontal: width / 40,
                  borderRadius: width / 60,
                },
              ]}
            />
            <TouchableOpacity
              style={{width: width / 18}}
              onPress={handlePasswordConfVisibility}>
              {rightIconConf === 'eye' ? (
                <Image source={IcEye} />
              ) : (
                <Image source={IcEyeOff} />
              )}
            </TouchableOpacity>
          </View>
          <View style={{marginTop: width / 10}}>
            <Button
              //   isLight={true}
              title="Reset Password"
              action={() => handleLogin()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePassword;
