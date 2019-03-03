import { StyleSheet, Dimensions } from 'react-native';
import { fontSize } from '../../../constants/theme';

export const header = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#f5f5f5',
    borderBottomColor: '#85106a',
    borderBottomWidth: 1,
  },
  centerComponent: {
    color: 'black',
    fontSize: fontSize.TITLE,
  },
});

const win = Dimensions.get('window');
const ratio = win.width / 980;

export const headerImg = StyleSheet.create({
  style: {
    width: win.width,
    height: 481 * ratio,
  },
});

export const tabs = StyleSheet.create({
  containerStyle: {
    borderWidth: 0,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: 'white',
  },
  selectedTextStyle: {
    color: '#85106a',
  },
  selectedButtonStyle: {
    backgroundColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: '#85106a',
    borderBottomWidth: 1,
  },
});
