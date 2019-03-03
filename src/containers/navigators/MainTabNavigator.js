import React from 'react';
import { Platform } from 'react-native';
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

import * as Routes from '../../constants/routes';


import { HomeScreen } from '../../screens';

const HomeStack = StackNavigator({
  [Routes.HOME_SCREEN]: { screen: HomeScreen },
}, { headerMode: `${Platform.OS === 'ios' ? 'float' : 'screen'}` });

export const MainTabNavigator = TabNavigator({
  Home: { screen: HomeStack },
}, {});

export default MainTabNavigator;
