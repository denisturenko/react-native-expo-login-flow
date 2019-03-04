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
import RFTextInput from '../../inputs/RFTextInput';

const SignUpForm3 = ({ handleSubmit, onClickBack }) => (
  <View style={root.container}>
    <SignUpBreadCrumbs isSecondBadgePrimary isThirdBadgePrimary />
    <View style={br.style} />
    <Field
      name={fieldNames.IS_STRESSFUL}
      label="Currently, is there any stressful situation that needs to be managed?"
      component={RFTRadio}
    />
    <View style={br.style} />
    <Field
      name={fieldNames.IS_DIFFICULT_TO_RECOVER}
      label="Do you have difficulties to cover after an adversity?"
      component={RFTRadio}
    />
    <View style={br.style} />
    <Field
      name={fieldNames.IS_MEDICAL_WORRY}
      label="Do you have any medical condition or worry that affects your current happiness/wellbeing?"
      component={RFTRadio}
    />
    <View style={br.style} />
    <Field
      name={fieldNames.TEXT1}
      label="Which one? (If your answer was positive)"
      placeholder="Text"
      component={RFTextInput}
    />
    <View style={br.style} />
    <Field
      name={fieldNames.TEXT2}
      label="Which one? (If your answer was positive)"
      placeholder="Text"
      component={RFTextInput}
    />
    <View style={br.style} />
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <CustomButton
        type={ButtonType.SECONDARY}
        title="Back"
        onPress={onClickBack}
      />
      <CustomButton
        title="Finish"
        onPress={handleSubmit}
      />
    </View>
  </View>
);

SignUpForm3.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onClickBack: PropTypes.func,
};

SignUpForm3.defaultProps = {
  onClickBack: _.noop,
};

export default SignUpForm3;
