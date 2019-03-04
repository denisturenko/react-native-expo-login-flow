import React from 'react';
import {
  addNavigationHelpers,
  NavigationActions,
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

import { store } from '../app/App';

import * as Routes from '../../constants/routes';

import {
  SignInScreen, SignUpScreen, SignUpScreen2, SignUpScreen3,
} from '../../screens';
import { } from '../auth';

export const AuthTabNavigator = TabNavigator({
  [Routes.SIGN_UP_SCREEN]: { screen: SignUpScreen },
  [Routes.SIGN_UP_SCREEN_2]: { screen: SignUpScreen2 },
  [Routes.SIGN_UP_SCREEN_3]: { screen: SignUpScreen3 },
  [Routes.SIGN_IN_SCREEN]: { screen: SignInScreen },
}, {
  headerMode: 'none',
  animationEnabled: false,
  swipeEnabled: false,
  backBehavior: 'none',
  tabBarOptions: {
    style: { display: 'none' },
  },
});

export default AuthTabNavigator;
