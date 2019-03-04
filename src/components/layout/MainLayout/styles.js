import { StyleSheet } from 'react-native';
import { colors, fontSize } from '../../../constants/theme';

export default StyleSheet.create({
  scroll: {
    marginLeft: 20,
    marginRight: 20,
  },
  header: {
    backgroundColor: colors.BUTTON_PRIMARY_BG,
    borderBottomColor: colors.LIGHT_TEXT_PRIMARY,
    borderBottomWidth: 1,
  },
  headerCenter: {
    color: '#fff',
    fontSize: fontSize.TITLE,
  },
});
