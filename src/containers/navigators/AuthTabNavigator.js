import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  addNavigationHelpers,
  NavigationActions,
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

import { store } from '../app/App';

import * as Routes from '../../constants/routes';

import {
  SignInScreen, SignUpScreen,
} from '../../screens';
import { } from '../auth';

export const AuthTabNavigator = TabNavigator({
  [Routes.SIGN_IN_SCREEN]: { screen: SignInScreen },
  [Routes.SIGN_UP_SCREEN]: { screen: SignUpScreen },
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
