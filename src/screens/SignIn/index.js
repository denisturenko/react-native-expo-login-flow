import React from 'react';
import {
  View, Text,
} from 'react-native';
import SignUpLayout from '../../components/layout/SignUpLayout';
import { view } from './styles';
import { SIGN_UP_SCREEN } from '../../constants/routes';


export const SignInScreen = ({ navigation }) => (
  <SignUpLayout selectedTabIndex={0} onPressTab={() => navigation.navigate(SIGN_UP_SCREEN)}>
    <View style={view.container}>
      <Text>Sign In screen</Text>
    </View>
  </SignUpLayout>
);

export default SignInScreen;
