import React from 'react';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Home } from '../screens/Home';
import { Explore } from '../screens/Explore';
import { Account } from '../screens/Account';
import { Cart } from '../screens/Cart';
import { ProductDetail } from '../screens/ProductDetail';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';

import { TabBarIcon, HeaderIcon, CartIcon } from '../components/Navigation';
import colors from '../constants/colors';

const tabStackScreenOptions = {
  headerRight: () => <CartIcon />,
  headerBackTitleVisible: false,
  headerLeft: props => {
    if (!props.canGoBack) {
      return null;
    }
    return <HeaderBackButton {...props} tintColor={colors.brand} />;
  },
};

const HomeStack = createStackNavigator();
const HomeStackNav = () => (
  <HomeStack.Navigator screenOptions={tabStackScreenOptions}>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Details" component={ProductDetail} />
  </HomeStack.Navigator>
);

const ExploreStack = createStackNavigator();
const ExploreStackNav = () => (
  <ExploreStack.Navigator screenOptions={tabStackScreenOptions}>
    <ExploreStack.Screen name="Explore" component={Explore} />
    <ExploreStack.Screen name="Details" component={ProductDetail} />
  </ExploreStack.Navigator>
);

const AccountStack = createStackNavigator();
const AccountStackNav = () => (
  <AccountStack.Navigator screenOptions={tabStackScreenOptions}>
    <AccountStack.Screen name="Account" component={Account} />
  </AccountStack.Navigator>
);

const MainTabs = createBottomTabNavigator();
const Tabs = () => (
  <MainTabs.Navigator
    tabBarOptions={{
      activeTintColor: colors.brand,
      inactiveTintColor: colors.icon,
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: props => <TabBarIcon {...props} routeName={route.name} />,
    })}
  >
    <MainTabs.Screen name="Home" component={HomeStackNav} />
    <MainTabs.Screen name="Explore" component={ExploreStackNav} />
    <MainTabs.Screen name="Account" component={AccountStackNav} />
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
          <HeaderIcon
            name="close"
            style={{ tintColor: colors.brand }}
            onPress={() => navigation.pop()}
          />
        ),
      })}
    />
    <MainStack.Screen
      name="Auth"
      component={AuthTabs}
      options={({ navigation }) => ({
        headerLeft: () => (
          <HeaderIcon
            name="close"
            style={{ tintColor: colors.brand }}
            onPress={() => navigation.pop()}
          />
        ),
      })}
    />
  </MainStack.Navigator>
);
