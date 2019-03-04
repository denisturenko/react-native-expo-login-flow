import React from 'react';
import {
  View,
} from 'react-native';
import SignUpLayout from '../../components/layout/SignUpLayout';
import { view } from './styles';
import { SIGN_IN_SCREEN, SIGN_UP_SCREEN, SIGN_UP_SCREEN_3 } from '../../constants/routes';
import SignUpForm2 from '../../containers/form/SignUpForm2';


export const SignUpScreen2 = ({ navigation }) => (
  <SignUpLayout selectedTabIndex={1} onPressTab={() => navigation.navigate(SIGN_IN_SCREEN)}>
    <View style={view.container}>
      <SignUpForm2
        onClickBack={() => navigation.navigate(SIGN_UP_SCREEN)}
        onSubmit={() => navigation.navigate(SIGN_UP_SCREEN_3)}
      />
    </View>
  </SignUpLayout>
);


export default SignUpScreen2;
