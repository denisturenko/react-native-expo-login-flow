import React from 'react';
import {
  TabNavigator,
} from 'react-navigation';

import * as Routes from '../../constants/routes';


import { HomeScreen } from '../../screens';

export const MainTabNavigator = TabNavigator({
  [Routes.HOME_SCREEN]: { screen: HomeScreen },
}, {
  headerMode: 'none',
  animationEnabled: false,
  swipeEnabled: false,
  backBehavior: 'none',
  tabBarOptions: {
    style: { display: 'none' },
  },
});

export default MainTabNavigator;
