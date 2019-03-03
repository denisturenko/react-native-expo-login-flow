import React from 'react';
import {
  View, Text,
} from 'react-native';
import SignUpLayout from '../../components/layout/SignUpLayout';
import { view } from './styles';
import { SIGN_IN_SCREEN } from '../../constants/routes';


export const SignUpScreen = ({ navigation }) => (
  <SignUpLayout selectedTabIndex={1} onPressTab={() => navigation.navigate(SIGN_IN_SCREEN)}>
    <View style={view.container}>
      <Text>Sign Up screen12</Text>
    </View>
  </SignUpLayout>
);


export default SignUpScreen;
