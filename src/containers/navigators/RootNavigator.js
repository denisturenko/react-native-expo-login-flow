import React from 'react';
import {
  StackNavigator,
} from 'react-navigation';

import * as Routes from '../../constants/routes';

import { AuthTabNavigator } from './AuthTabNavigator';
import { MainTabNavigator } from './MainTabNavigator';
import { AppLoadingScreen } from '../app/AppLoadingScreen';

export const RootNavigator = StackNavigator({
  [Routes.APP_LOADING_SCREEN]: { screen: AppLoadingScreen },
  [Routes.AUTH_ROUTE]: { screen: AuthTabNavigator },
  [Routes.MAIN_ROUTE]: { screen: MainTabNavigator },
}, {
  headerMode: 'none',
});

export default RootNavigator;
