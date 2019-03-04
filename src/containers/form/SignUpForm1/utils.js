import * as _ from 'lodash';
import { fieldNames } from '../../../constants/forms/sign_up';
import { isEmail } from '../../../lib/validators/string';
import { FormErrors } from '../../../@messages/form_errors';


export const validate = (values) => {
  const errors = {};

  const login = _.get(values, fieldNames.LOGIN);
  if (login === undefined) {
    errors[fieldNames.LOGIN] = FormErrors.REQUIRED;
  } else if (login.trim() === '') {
    errors[fieldNames.LOGIN] = FormErrors.BLANK;
  } else if (!isEmail(login)) {
    errors[fieldNames.LOGIN] = FormErrors.INVALID_EMAIL;
  }

  // todo check date in future
  const birthDay = _.get(values, fieldNames.BIRTH_DAY);
  if (birthDay === undefined) {
    errors[fieldNames.BIRTH_DAY] = FormErrors.REQUIRED;
  } else if (birthDay.trim() === '') {
    errors[fieldNames.BIRTH_DAY] = FormErrors.BLANK;
  }

  const firstName = _.get(values, fieldNames.FIRST_NAME);
  if (firstName === undefined) {
    errors[fieldNames.FIRST_NAME] = FormErrors.REQUIRED;
  } else if (firstName.trim() === '') {
    errors[fieldNames.FIRST_NAME] = FormErrors.BLANK;
  }

  const lastName = _.get(values, fieldNames.LAST_NAME);
  if (lastName === undefined) {
    errors[fieldNames.LAST_NAME] = FormErrors.REQUIRED;
  } else if (lastName.trim() === '') {
    errors[fieldNames.LAST_NAME] = FormErrors.BLANK;
  }

  const password = _.get(values, fieldNames.PASSWORD);
  if (password === undefined) {
    errors[fieldNames.PASSWORD] = FormErrors.REQUIRED;
  } else if (password.trim() === '') {
    errors[fieldNames.PASSWORD] = FormErrors.BLANK;
  }

  const password2 = _.get(values, fieldNames.PASSWORD2);
  if (password2 === undefined) {
    errors[fieldNames.PASSWORD2] = FormErrors.REQUIRED;
  } else if (password2.trim() === '') {
    errors[fieldNames.PASSWORD2] = FormErrors.BLANK;
  } else if (password2 !== password) {
    errors[fieldNames.PASSWORD2] = FormErrors.NOT_MATCH_PASSWORD;
  }


  return errors;
};
