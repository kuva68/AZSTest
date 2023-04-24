import React from 'react';

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../Screens/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from './Drower';
import {Colors} from '../Constants/Colors';
import PhoneCodeScreen from '../Screens/PhoneCode';
import LoginScreen from '../Screens/Login';
import CabinetScreen from '../Screens/Cabinet';
import FullNameScreen from '../Screens/FullName';
import BirthDateScreen from '../Screens/BirthDate';

export type RootParams = {
  Home: undefined;
  Cabinet: undefined;
  Login: undefined;
  PhoneCode: undefined;
  LoginStack: undefined;
  FullName: undefined;
};

const Drawer = createDrawerNavigator<RootParams>();

function HomeDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerStyle: {
          backgroundColor: Colors.drawerColor,
        },
        drawerPosition: 'right',
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{header: () => null}}
      />
      <Drawer.Screen
        name="Cabinet"
        component={CabinetScreen}
        options={{header: () => null}}
      />
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Drawer.Screen
        name="PhoneCode"
        component={PhoneCodeScreen}
        options={{header: () => null}}
      />
    </Drawer.Navigator>
  );
}
const SlideFromRight = {...TransitionPresets.SlideFromRightIOS};
const Stack = createStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={() => {
        return {
          gestureEnabled: false,
          ...SlideFromRight,
        };
      }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{gestureEnabled: true, header: () => null}}
      />
      <Stack.Screen
        name="PhoneCode"
        component={PhoneCodeScreen}
        options={{gestureEnabled: true, header: () => null}}
      />
      <Stack.Screen
        name="FullName"
        component={FullNameScreen}
        options={{gestureEnabled: true, header: () => null}}
      />
      <Stack.Screen
        name="BirthDate"
        component={BirthDateScreen}
        options={{gestureEnabled: true, header: () => null}}
      />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={() => {
        return {
          ...SlideFromRight,
        };
      }}>
      <Stack.Screen
        name="HomeDrawer"
        component={HomeDrawer}
        options={{gestureEnabled: true, header: () => null}}
      />
      <Stack.Screen
        name="LoginStack"
        component={LoginStack}
        options={{gestureEnabled: true, header: () => null}}
      />
    </Stack.Navigator>
  );
};

export const createRootNavigator = () => {
  const AllScreens = () => {
    return (
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    );
  };

  return AllScreens;
};
