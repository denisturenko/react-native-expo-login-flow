export const validate = ({ login, password }) => {
  const errors = {};
  if (login === undefined) {
    errors.login = 'Required';
  } else if (login.trim() === '') {
    errors.login = 'Must not be blank';
  }
  if (password === undefined) {
    errors.password = 'Required';
  } else if (password.trim() === '') {
    errors.password = 'Must not be blank';
  }
  return errors;
};
