import * as _ from 'lodash';
import { FormErrors } from '../../../@messages/form_errors';
import { fieldNames } from '../../../constants/forms/sign_up';

export const validate = (values) => {
  const errors = {};

  const login = _.get(values, fieldNames.LOGIN);
  if (login === undefined) {
    errors[fieldNames.LOGIN] = FormErrors.REQUIRED;
  } else if (login.trim() === '') {
    errors[fieldNames.LOGIN] = FormErrors.BLANK;
  }

  const password = _.get(values, fieldNames.PASSWORD);
  if (password === undefined) {
    errors[fieldNames.PASSWORD] = FormErrors.REQUIRED;
  } else if (password.trim() === '') {
    errors[fieldNames.PASSWORD] = FormErrors.BLANK;
  }

  return errors;
};
