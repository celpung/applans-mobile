import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import React, {useState, useRef} from 'react';
import Colors from '../../Utils/Colors';
import StylesFont from '../../Utils/StylesFont';
import IcCalendar from '../../assets/icon/ic-calendar.png';
import IcBack from '../../assets/icon/back.png';
import Checklist from '../../assets/icon/checklist.png';
import CheckBox from '@react-native-community/checkbox';
import Button from '../../Components/Button';
import SignatureCapture from 'react-native-signature-capture';
import DateTimePicker from '@react-native-community/datetimepicker';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const KeteranganPetugas = ({navigation}) => {
  const signatureRef = useRef();
  const signatureRef2 = useRef();
  const signatureRef3 = useRef();
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [textDate, setTextDate] = useState('Pilih Tanggal'); // State untuk textDate
  const [show, setShow] = useState(false);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const saveSign = () => {
    signatureRef.current.saveImage();
  };
  const saveSign2 = () => {
    signatureRef2.current.saveImage();
  };
  const saveSign3 = () => {
    signatureRef3.current.saveImage();
  };

  // Function to reset the signature
  const resetSign = () => {
    signatureRef.current.resetImage();
  };
  const resetSign2 = () => {
    signatureRef2.current.resetImage();
  };
  const resetSign3 = () => {
    signatureRef3.current.resetImage();
  };
  const handleCheckboxChange = checkboxName => {
    if (checkboxName === 'checkbox1') {
      setCheckbox1(true);
      setCheckbox2(false);
    } else if (checkboxName === 'checkbox2') {
      setCheckbox1(false);
      setCheckbox2(true);
    }
  };
  const handleDate = (event, selectedDate) => {
    setShow(false);
    const currentDate = selectedDate || date || new Date(); // Tambahkan 'new Date()' sebagai nilai default
    setDate(currentDate);

    // Menggunakan Intl.DateTimeFormat untuk memformat tanggal
    const dateFormatter = new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    setTextDate(dateFormatter.format(currentDate));
  };
  const onSaveEvent = result => {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    console.log(result);
  };
  const onDragEvent = () => {
    // This callback will be called when the user enters signature
    console.log('dragged');
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
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              1. Tanggal verivali
            </Text>
            <TouchableOpacity
              onPress={() => setShow(true)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                //   paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <TextInput
                editable={false}
                value={textDate}
                // onChangeText={text => setPassword(text)}
                //   placeholder="Search"
                placeholderTextColor="grey"
                style={[
                  StylesFont.mediumh5,
                  {
                    color: 'black',
                    //   height: height / 20,
                    flex: 1,
                    // paddingHorizontal: width / 40,
                    borderRadius: width / 60,
                  },
                ]}
              />
              <Image source={IcCalendar} resizeMode="contain" />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              2. Nama petugas verivali
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
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>Kode</Text>
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
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              Tanda tangan petugas verivali
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 200,
              borderWidth: 0.5,
              marginVertical: 10,
              // borderRadius: 20,
            }}>
            <SignatureCapture
              style={{
                flex: 1,
                borderColor: '#000033',
                // borderWidth: 1,
                borderRadius: 20,
              }}
              ref={signatureRef}
              onSaveEvent={onSaveEvent}
              onDragEvent={onDragEvent}
              saveImageFileInExtStorage={false}
              showNativeButtons={false}
              showTitleLabel={false}
              backgroundColor="#ffffff"
              // borderColor={1}
              strokeColor="#000000"
              minStrokeWidth={4}
              maxStrokeWidth={4}
              viewMode={'portrait'}
              // borderRadius={20}
            />
          </View>
          <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={resetSign}
              style={{
                width: '30%',
                backgroundColor: Colors.SecondaryColor,
                paddingHorizontal: width / 24,
                paddingVertical: width / 30,
                alignItems: 'center',
                borderRadius: 12,
              }}>
              <Text
                style={[StylesFont.regularSmall, {color: Colors.PrimaryColor}]}>
                Ulangi
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={saveSign}
              style={{
                width: '30%',
                backgroundColor: Colors.PrimaryColor,
                paddingHorizontal: width / 24,
                paddingVertical: width / 30,
                alignItems: 'center',
                borderRadius: 12,
              }}>
              <Text style={[StylesFont.regularSmall, {color: Colors.Light}]}>
                Simpan
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              3. Tanggal Pemeriksaan
            </Text>
            <TouchableOpacity
              onPress={() => setShow(true)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: Colors.Light,
                paddingHorizontal: width / 26,
                //   paddingVertical: width / 40,
                borderRadius: 10,
                elevation: 5,
                marginVertical: width / 60,
              }}>
              <TextInput
                editable={false}
                value={textDate}
                // onChangeText={text => setPassword(text)}
                //   placeholder="Search"
                placeholderTextColor="grey"
                style={[
                  StylesFont.mediumh5,
                  {
                    color: 'black',
                    //   height: height / 20,
                    flex: 1,
                    // paddingHorizontal: width / 40,
                    borderRadius: width / 60,
                  },
                ]}
              />
              <Image source={IcCalendar} resizeMode="contain" />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              4. Nama pemeriksa
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
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              Tanda tangan petugas verivali
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 200,
              borderWidth: 0.5,
              marginVertical: 10,
              // borderRadius: 20,
            }}>
            <SignatureCapture
              style={{
                flex: 1,
                borderColor: '#000033',
                // borderWidth: 1,
                borderRadius: 20,
              }}
              ref={signatureRef2}
              onSaveEvent={onSaveEvent}
              onDragEvent={onDragEvent}
              saveImageFileInExtStorage={false}
              showNativeButtons={false}
              showTitleLabel={false}
              backgroundColor="#ffffff"
              // borderColor={1}
              strokeColor="#000000"
              minStrokeWidth={4}
              maxStrokeWidth={4}
              viewMode={'portrait'}
              // borderRadius={20}
            />
          </View>
          <View style={{justifyContent: 'space-around', flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={resetSign2}
              style={{
                width: '30%',
                backgroundColor: Colors.SecondaryColor,
                paddingHorizontal: width / 24,
                paddingVertical: width / 30,
                alignItems: 'center',
                borderRadius: 12,
              }}>
              <Text
                style={[StylesFont.regularSmall, {color: Colors.PrimaryColor}]}>
                Ulangi
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={saveSign2}
              style={{
                width: '30%',
                backgroundColor: Colors.PrimaryColor,
                paddingHorizontal: width / 24,
                paddingVertical: width / 30,
                alignItems: 'center',
                borderRadius: 12,
              }}>
              <Text style={[StylesFont.regularSmall, {color: Colors.Light}]}>
                Simpan
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'column', marginVertical: 10}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              5. Hasil verivali keluarga penerima manfaat:
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
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <Text style={[StylesFont.mediumh5, {color: 'black'}]}>
              Tanda tangan petugas verivali
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              height: 200,
              borderWidth: 0.5,
              marginVertical: 10,
              // borderRadius: 20,
            }}>
            <SignatureCapture
              style={{
                flex: 1,
                borderColor: '#000033',
                // borderWidth: 1,
                borderRadius: 20,
              }}
              ref={signatureRef3}
              onSaveEvent={onSaveEvent}
              onDragEvent={onDragEvent}
              saveImageFileInExtStorage={false}
              showNativeButtons={false}
              showTitleLabel={false}
              backgroundColor="#ffffff"
              // borderColor={1}
              strokeColor="#000000"
              minStrokeWidth={4}
              maxStrokeWidth={4}
              viewMode={'portrait'}
              // borderRadius={20}
            />
          </View>
          <View
            style={{
              justifyContent: 'space-around',
              flexDirection: 'row',
              marginBottom: width / 20,
            }}>
            <TouchableOpacity
              onPress={resetSign3}
              style={{
                width: '30%',
                backgroundColor: Colors.SecondaryColor,
                paddingHorizontal: width / 24,
                paddingVertical: width / 30,
                alignItems: 'center',
                borderRadius: 12,
              }}>
              <Text
                style={[StylesFont.regularSmall, {color: Colors.PrimaryColor}]}>
                Ulangi
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={saveSign3}
              style={{
                width: '30%',
                backgroundColor: Colors.PrimaryColor,
                paddingHorizontal: width / 24,
                paddingVertical: width / 30,
                alignItems: 'center',
                borderRadius: 12,
              }}>
              <Text style={[StylesFont.regularSmall, {color: Colors.Light}]}>
                Simpan
              </Text>
            </TouchableOpacity>
          </View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              onChange={handleDate}
              is24Hour={true}
              display="default"
              //   onChange={onChange}
            />
          )}
          <Button title="Simpan" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default KeteranganPetugas;
