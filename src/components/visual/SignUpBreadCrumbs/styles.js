import { StyleSheet } from 'react-native';
import { colors, fontSize } from '../../../constants/theme';

export default StyleSheet.create({
  row: { flex: 1, flexDirection: 'row' },
  cell: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  hr: {
    width: 50,
    height: 1,
    borderWidth: 1,
    borderColor: colors.COOL_GREY,
    marginTop: 8,
  },
  badgePrimary: {
    backgroundColor: colors.PRIMARY,
  },
  badgeSecondary: {
    backgroundColor: colors.COOL_GREY,
  },
  textPrimary: {
    alignItems: 'center',
    textAlign: 'center',
    width: 70,
    fontSize: fontSize.DETAIL,
  },
  textSecondary: {
    color: colors.COOL_GREY,
  },
});
