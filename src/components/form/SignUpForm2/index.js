import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { View, Text } from 'react-native';
import * as _ from 'lodash';
import { root, br } from './styles';
import RFTRadio from '../../radio/RFRadio';
import CustomButton from '../../buttons/CustomButton';
import { ButtonType } from '../../../@types/button_type';
import SignUpBreadCrumbs from '../../visual/SignUpBreadCrumbs';
import { fieldNames } from '../../../constants/forms/sign_up';

const SignUpForm2 = ({ handleSubmit, onClickBack }) => (
  <View style={root.container}>
    <SignUpBreadCrumbs isSecondBadgePrimary />
    <View style={br.style} />
    <Text>
      Well, let`s go through some questions about how you are feeling right  now.
      Try to be as much  sincere as possible.
      This will give us the basis over which we can design the best training plan just for you!
      It will take less then 3 minutes.
    </Text>
    <View style={br.style} />
    <Field
      name={fieldNames.IS_WORRY_ABOUT_PEOPLE}
      label="Do you tend to worry about what other people think of you, your decisions and choices?"
      component={RFTRadio}
    />
    <View style={br.style} />
    <Field
      name={fieldNames.IS_UNHAPPY}
      label="When you fell unhappy with a situation do you look for new experience or ways to change it?"
      component={RFTRadio}
    />
    <View style={br.style} />
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <CustomButton
        type={ButtonType.SECONDARY}
        title="Back"
        onPress={onClickBack}
      />
      <CustomButton
        title="Next"
        onPress={handleSubmit}
      />
    </View>
  </View>
);

SignUpForm2.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onClickBack: PropTypes.func,
};

SignUpForm2.defaultProps = {
  onClickBack: _.noop,
};

export default SignUpForm2;
