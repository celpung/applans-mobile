import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
// import SafeAreaView from 'react-native-safe-area-context';
import IcAplans from '../assets/AplansRed.png';
import IcEye from '../assets/icon/eye.png';
import IcEyeOff from '../assets/icon/eyeoff.png';
import IcPemko from '../assets/icon/pemko.png';
import IcMedanBerkah from '../assets/icon/medanberkah.png';
import StylesFont from '../Utils/StylesFont';
import Colors from '../Utils/Colors';
import Button from '../Components/Button';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const LoginScreen = ({navigation}) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };
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
    navigation.navigate('Home');
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.bgColor}}>
      <View
        style={{
          width: width,
          height: '35%',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Image
          source={IcAplans}
          style={{width: '80%', height: height / 10}}
          resizeMode="contain"
        />
        <Text style={[StylesFont.boldh2, {color: 'black'}]}>
          Halo,Selamat Datang!
        </Text>
      </View>
      <View style={{paddingHorizontal: width / 14, marginTop: width / 16}}>
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
        <View style={{marginBottom: width / 28}}>
          <Text style={[StylesFont.semiBoldh4, {color: Colors.LightBlack}]}>
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
                  color: Colors.Dark,
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
          <View style={{marginTop: width / 10}}>
            <Button
              //   isLight={true}
              title="Masuk"
              action={() => handleLogin()}
            />
          </View>
          <View>
            <Button
              isLight={true}
              title="Lupa Password?"
              //   action={() => handleLogin()}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          width: width,
          flex: 1,
          //   borderWidth: 1,
          justifyContent: 'center',
          paddingBottom: height / 30,
          alignItems: 'flex-end',
          flexDirection: 'row',
        }}>
        <Image
          source={IcPemko}
          style={{width: '40%', height: height / 10}}
          resizeMode="contain"
        />
        <Image
          source={IcMedanBerkah}
          style={{width: '40%', height: height / 10}}
          resizeMode="contain"
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
