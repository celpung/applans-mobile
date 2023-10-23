import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../Screen/LoginScreen';
import SplashScreen from '../Screen/SplashScreen';
import TaskScreen from '../Screen/TaskScreen';
import SettingScreen from '../Screen/SettingScreen';
import HomeScreen from '../Screen/HomeScreen';
import BottomNavigation from './BottomNavigation';
import CheckEmail from '../Screen/CheckEmail';
import VerifyOtp from '../Screen/VerifyOtp';
import ChangePassword from '../Screen/ChangePassword';
import ListDtks from '../Screen/ListDtks';
import TaskDtks from '../Screen/TaskDtks';
import PengenalanTempat from '../Screen/DTKS/PengenalanTempat';
import KeteranganPerumahan from '../Screen/DTKS/KeteranganPerumahan';
import KeteranganSosial from '../Screen/DTKS/KeteranganSosial';
import KepemilikanAset from '../Screen/DTKS/KepemilikanAset';
import KeteranganPetugas from '../Screen/DTKS/KeteranganPetugas';
import FotoKTP from '../Screen/DTKS/FotoKTP';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function Home() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomNavigation {...props} />}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'HomeScreen', unmountOnBlur: true}}
      />
      <Tab.Screen name="TaskScreen" component={TaskScreen} />
      <Tab.Screen name="SettingScreen" component={SettingScreen} />
    </Tab.Navigator>
  );
}
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Tab.Screen name="CheckEmail" component={CheckEmail} />
        <Tab.Screen name="VerifyOtp" component={VerifyOtp} />
        <Tab.Screen name="ChangePassword" component={ChangePassword} />
        <Tab.Screen name="ListDtks" component={ListDtks} />
        <Tab.Screen name="TaskDtks" component={TaskDtks} />
        <Tab.Screen name="PengenalanTempat" component={PengenalanTempat} />
        <Tab.Screen name="KeteranganSosial" component={KeteranganSosial} />
        <Tab.Screen name="KepemilikanAset" component={KepemilikanAset} />
        <Tab.Screen name="KeteranganPetugas" component={KeteranganPetugas} />
        <Tab.Screen name="FotoKTP" component={FotoKTP} />
        <Tab.Screen
          name="KeteranganPerumahan"
          component={KeteranganPerumahan}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
