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
import IcCamera from '../../assets/icon/camera.png';
import Checklist from '../../assets/icon/checklist.png';
import CheckBox from '@react-native-community/checkbox';
import Button from '../../Components/Button';
import {launchCamera} from 'react-native-image-picker';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const FotoKTP = ({navigation}) => {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCheckboxChange = checkboxName => {
    if (checkboxName === 'checkbox1') {
      setCheckbox1(true);
      setCheckbox2(false);
    } else if (checkboxName === 'checkbox2') {
      setCheckbox1(false);
      setCheckbox2(true);
    }
  };
  const handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        console.log(imageUri);
      }
    });
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
          <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
            1. Foto KTP
          </Text>
          <TouchableOpacity
            onPress={handleCameraLaunch}
            style={{
              height: height / 5,
              backgroundColor: 'rgba(221, 33, 83, 0.03)',
              marginVertical: width / 20,
              borderWidth: 1,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderStyle: 'dashed',
              borderColor: Colors.PrimaryColor,
            }}>
            {selectedImage ? ( // Check if an image is selected
              <Image
                source={{uri: selectedImage}} // Display the selected image
                style={{width: '30%', height: '90%', borderRadius: 10}}
                resizeMode="contain"
              />
            ) : (
              <View
                style={{
                  width: '30%',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                <Image
                  source={IcCamera}
                  style={{width: '50%'}}
                  resizeMode="contain"
                />
                <Text
                  style={[
                    StylesFont.mediumh5,
                    {
                      color: Colors.PrimaryColor,
                      borderBottomWidth: 1,
                      borderBottomColor: Colors.PrimaryColor,
                    },
                  ]}>
                  Ambil Foto
                </Text>
              </View>
            )}
          </TouchableOpacity>
          <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
            2. Foto KK
          </Text>
          <TouchableOpacity
            onPress={handleCameraLaunch}
            style={{
              height: height / 5,
              backgroundColor: 'rgba(221, 33, 83, 0.03)',
              marginVertical: width / 20,
              borderWidth: 1,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderStyle: 'dashed',
              borderColor: Colors.PrimaryColor,
            }}>
            {selectedImage ? ( // Check if an image is selected
              <Image
                source={{uri: selectedImage}} // Display the selected image
                style={{width: '30%', height: '90%', borderRadius: 10}}
                resizeMode="contain"
              />
            ) : (
              <View
                style={{
                  width: '30%',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                <Image
                  source={IcCamera}
                  style={{width: '50%'}}
                  resizeMode="contain"
                />
                <Text
                  style={[
                    StylesFont.mediumh5,
                    {
                      color: Colors.PrimaryColor,
                      borderBottomWidth: 1,
                      borderBottomColor: Colors.PrimaryColor,
                    },
                  ]}>
                  Ambil Foto
                </Text>
              </View>
            )}
          </TouchableOpacity>
          <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
            3. Foto Keadaan Rumah
          </Text>
          <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
            a. Ruang depan
          </Text>
          <TouchableOpacity
            onPress={handleCameraLaunch}
            style={{
              height: height / 5,
              backgroundColor: 'rgba(221, 33, 83, 0.03)',
              marginVertical: width / 20,
              borderWidth: 1,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderStyle: 'dashed',
              borderColor: Colors.PrimaryColor,
            }}>
            {selectedImage ? ( // Check if an image is selected
              <Image
                source={{uri: selectedImage}} // Display the selected image
                style={{width: '30%', height: '90%', borderRadius: 10}}
                resizeMode="contain"
              />
            ) : (
              <View
                style={{
                  width: '30%',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                <Image
                  source={IcCamera}
                  style={{width: '50%'}}
                  resizeMode="contain"
                />
                <Text
                  style={[
                    StylesFont.mediumh5,
                    {
                      color: Colors.PrimaryColor,
                      borderBottomWidth: 1,
                      borderBottomColor: Colors.PrimaryColor,
                    },
                  ]}>
                  Ambil Foto
                </Text>
              </View>
            )}
          </TouchableOpacity>
          <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
            b. Ruang Tengah
          </Text>
          <TouchableOpacity
            onPress={handleCameraLaunch}
            style={{
              height: height / 5,
              backgroundColor: 'rgba(221, 33, 83, 0.03)',
              marginVertical: width / 20,
              borderWidth: 1,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderStyle: 'dashed',
              borderColor: Colors.PrimaryColor,
            }}>
            {selectedImage ? ( // Check if an image is selected
              <Image
                source={{uri: selectedImage}} // Display the selected image
                style={{width: '30%', height: '90%', borderRadius: 10}}
                resizeMode="contain"
              />
            ) : (
              <View
                style={{
                  width: '30%',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                <Image
                  source={IcCamera}
                  style={{width: '50%'}}
                  resizeMode="contain"
                />
                <Text
                  style={[
                    StylesFont.mediumh5,
                    {
                      color: Colors.PrimaryColor,
                      borderBottomWidth: 1,
                      borderBottomColor: Colors.PrimaryColor,
                    },
                  ]}>
                  Ambil Foto
                </Text>
              </View>
            )}
          </TouchableOpacity>
          <Text style={[StylesFont.mediumh5, {color: 'black'}]}>c. Dapur</Text>
          <TouchableOpacity
            onPress={handleCameraLaunch}
            style={{
              height: height / 5,
              backgroundColor: 'rgba(221, 33, 83, 0.03)',
              marginVertical: width / 20,
              borderWidth: 1,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderStyle: 'dashed',
              borderColor: Colors.PrimaryColor,
            }}>
            {selectedImage ? ( // Check if an image is selected
              <Image
                source={{uri: selectedImage}} // Display the selected image
                style={{width: '30%', height: '90%', borderRadius: 10}}
                resizeMode="contain"
              />
            ) : (
              <View
                style={{
                  width: '30%',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                <Image
                  source={IcCamera}
                  style={{width: '50%'}}
                  resizeMode="contain"
                />
                <Text
                  style={[
                    StylesFont.mediumh5,
                    {
                      color: Colors.PrimaryColor,
                      borderBottomWidth: 1,
                      borderBottomColor: Colors.PrimaryColor,
                    },
                  ]}>
                  Ambil Foto
                </Text>
              </View>
            )}
          </TouchableOpacity>
          <Text style={[StylesFont.mediumh5, {color: 'black'}]}>d. Toilet</Text>
          <TouchableOpacity
            onPress={handleCameraLaunch}
            style={{
              height: height / 5,
              backgroundColor: 'rgba(221, 33, 83, 0.03)',
              marginVertical: width / 20,
              borderWidth: 1,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderStyle: 'dashed',
              borderColor: Colors.PrimaryColor,
            }}>
            {selectedImage ? ( // Check if an image is selected
              <Image
                source={{uri: selectedImage}} // Display the selected image
                style={{width: '30%', height: '90%', borderRadius: 10}}
                resizeMode="contain"
              />
            ) : (
              <View
                style={{
                  width: '30%',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}>
                <Image
                  source={IcCamera}
                  style={{width: '50%'}}
                  resizeMode="contain"
                />
                <Text
                  style={[
                    StylesFont.mediumh5,
                    {
                      color: Colors.PrimaryColor,
                      borderBottomWidth: 1,
                      borderBottomColor: Colors.PrimaryColor,
                    },
                  ]}>
                  Ambil Foto
                </Text>
              </View>
            )}
          </TouchableOpacity>
          <Button title="Simpan" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FotoKTP;
