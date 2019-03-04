import React from 'react';
import {
  View,
} from 'react-native';
import SignUpLayout from '../../components/layout/SignUpLayout';
import { view } from './styles';
import { SIGN_IN_SCREEN, SIGN_UP_SCREEN_2 } from '../../constants/routes';
import SignUpForm3 from '../../containers/form/SignUpForm3';


export const SignUpScreen3 = ({ navigation }) => (
  <SignUpLayout selectedTabIndex={1} onPressTab={() => navigation.navigate(SIGN_IN_SCREEN)}>
    <View style={view.container}>
      <SignUpForm3
        onClickBack={() => navigation.navigate(SIGN_UP_SCREEN_2)}
      />
    </View>
  </SignUpLayout>
);


export default SignUpScreen3;
