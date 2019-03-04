import { StyleSheet } from 'react-native';
import { fontSize } from '../../../constants/theme';

export default StyleSheet.create({
  inputContainerStyle: {
    borderColor: 'gray',
    borderWidth: 0,
    borderBottomWidth: 1,
    width: 200,
    height: 40,
    padding: 10,
  },
  pickerStyle: {
    borderColor: 'gray',
    borderBottomWidth: 1,
    width: 200,
    height: 40,
    padding: 10,
  },
  labelStyle: {
    fontSize: fontSize.FORM_LABEL,
  },
  rootError: {
    color: 'red',
  },
});
