import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import NewsScreen from '../screens/News/NewsScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NewsDetailScreen from '../screens/News/NewsDetailScreen';
import MapsScreen from '../screens/MapsScreen';
import NotificationScreen from '../screens/NotificationScreen';

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

const MapsStack = createStackNavigator(
  {
    Maps: MapsScreen,
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
    Notification: NotificationScreen,
    Detail: NewsDetailScreen
  },
  config
);

NotificationStack.navigationOptions = {
  tabBarLabel: 'Notificações',
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
  tabBarLabel: 'Configurações',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  NewsStack,
  MapsStack,
  NotificationStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
