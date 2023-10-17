import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import LoginScreen from '../Screen/LoginScreen';
import SplashScreen from '../Screen/SplashScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// function Home() {
//   return (
//     <Tab.Navigator
//       screenOptions={{ headerShown: false }}
//       tabBar={(props) => <BottomNavigation {...props} />}
//     >
//       <Tab.Screen
//         name="Dashboard"
//         component={Dashboard}
//         options={{ title: "Dashboard", unmountOnBlur: true }}
//       />
//       <Tab.Screen name="BookingList" component={BookingList} />
//       <Tab.Screen name="Profil" component={Profil} />
//     </Tab.Navigator>
//   );
// }
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
