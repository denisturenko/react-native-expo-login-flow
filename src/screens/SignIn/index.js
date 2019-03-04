import React from 'react';
import {
  View,
} from 'react-native';
import SignUpLayout from '../../components/layout/SignUpLayout';
import { view } from './styles';
import { SIGN_UP_SCREEN } from '../../constants/routes';
import SignInFormRF from '../../containers/form/SignInForm';


export const SignInScreen = ({ navigation }) => (
  <SignUpLayout selectedTabIndex={0} onPressTab={() => navigation.navigate(SIGN_UP_SCREEN)}>
    <View style={view.container}>
      <SignInFormRF />
    </View>
  </SignUpLayout>
);

export default SignInScreen;
