import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/News/NewsScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NewsDetailScreen from '../screens/News/NewsDetailScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const NewsStack = createStackNavigator(
  {
    News: NewsScreen,
    Detail: NewsDetailScreen
  },
  config
);

NewsStack.navigationOptions = {
  tabBarLabel: 'Notícias',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-paper`
          : 'md-paper'
      }
    />
  ),
};

NewsStack.path = '';

const RainfallStack = createStackNavigator(
  {
    Rainfall: LinksScreen,
  },
  config
);

RainfallStack.navigationOptions = {
  tabBarLabel: 'Chuvas',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-rainy' : 'md-rainy'} />
  ),
};

RainfallStack.path = '';
const MapsStack = createStackNavigator(
  {
    Maps: LinksScreen,
  },
  config
);

MapsStack.navigationOptions = {
  tabBarLabel: 'Mapa',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'} />
  ),
};

MapsStack.path = '';
const NotificationStack = createStackNavigator(
  {
    Notification: LinksScreen,
  },
  config
);

NotificationStack.navigationOptions = {
  tabBarLabel: 'Notification',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-notifications' : 'md-notifications'} />
  ),
};

NotificationStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  NewsStack,
  RainfallStack,
  MapsStack,
  NotificationStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
