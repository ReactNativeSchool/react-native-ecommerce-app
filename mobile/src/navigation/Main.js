import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Home } from '../screens/Home';
import { Explore } from '../screens/Explore';
import { Account } from '../screens/Account';
import { Cart } from '../screens/Cart';
import { ProductDetail } from '../screens/ProductDetail';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';

const HomeStack = createStackNavigator();
const HomeStackNav = () => (
  <HomeStack.Navigator
    screenOptions={({ navigation }) => ({
      headerRight: () => (
        <Button title="Cart" onPress={() => navigation.push('Cart')} />
      ),
    })}
  >
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Details" component={ProductDetail} />
  </HomeStack.Navigator>
);

const ExploreStack = createStackNavigator();
const ExploreStackNav = () => (
  <ExploreStack.Navigator
    screenOptions={({ navigation }) => ({
      headerRight: () => (
        <Button title="Cart" onPress={() => navigation.push('Cart')} />
      ),
    })}
  >
    <ExploreStack.Screen name="Explore" component={Explore} />
    <ExploreStack.Screen name="Details" component={ProductDetail} />
  </ExploreStack.Navigator>
);

const MainTabs = createBottomTabNavigator();
const Tabs = () => (
  <MainTabs.Navigator>
    <MainTabs.Screen name="Home" component={HomeStackNav} />
    <MainTabs.Screen name="Explore" component={ExploreStackNav} />
    <MainTabs.Screen name="Account" component={Account} />
  </MainTabs.Navigator>
);

const Auth = createMaterialTopTabNavigator();
const AuthTabs = () => (
  <Auth.Navigator>
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

const MainStack = createStackNavigator();
export const Main = () => (
  <MainStack.Navigator mode="modal">
    <MainStack.Screen
      name="Root"
      component={Tabs}
      options={{
        headerShown: false,
      }}
    />
    <MainStack.Screen
      name="Cart"
      component={Cart}
      options={({ navigation }) => ({
        headerLeft: () => (
          <Button title="Close" onPress={() => navigation.pop()} />
        ),
      })}
    />
    <MainStack.Screen
      name="Auth"
      component={AuthTabs}
      options={({ navigation }) => ({
        headerLeft: () => (
          <Button title="Close" onPress={() => navigation.pop()} />
        ),
      })}
    />
  </MainStack.Navigator>
);
