import { StyleSheet } from 'react-native';

export const root = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});

export const br = StyleSheet.create({
  style: {
    height: 20,
  },
});

export const errorBlock = StyleSheet.create({
  style: {
    color: 'red',
  },
});
