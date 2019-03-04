import Layout from './layout';
import {
  fontFix, width, height, size,
} from '../lib/dimension';

export const colors = {
  BACKGROUND: '#2e2f40',

  PRIMARY: '#841584',
  ACCENT: '#08ce94',
  BORDER_GREY: '#95989A',
  COOL_GREY: '#CEDFDE',

  DARK_TEXT_PRIMARY: '#0c0b0c',

  LIGHT_TEXT_PRIMARY: '#ffffff',

  GRADIENT_LIGHT: '#27C9D8',
  GRADIENT_DARK: '#007ADD',

  FORM_LIGHT_TITLE: '#c4fcff',
  FORM_LIGHT_INPUT: '#fff',
  FORM_LIGHT_PLACEHOLDER: 'rgba(0,0,0,0.3)',

  BUTTON_PRIMARY_BG: '#841584',
  BUTTON_PRIMARY_TITLE: '#ffffff',

  BUTTON_SECONDARY_BG: 'transparent',
  BUTTON_SECONDARY_TITLE: '#000',
};

export const fontSize = {
  DISPLAY: 24,
  TITLE: 20,
  SUB_TITLE: 16,
  BODY: 14,
  BUTTON: fontFix(14),
  DETAIL: 12,
  MINOR: 10,

  FORM_LABEL: 12,
  FORM_INPUT: 16,
};

export const fontWeight = {
  FORM_LABEL: Layout.isAndroid ? '400' : '500',
};

export const fontFamily = {
  segoeUi: 'segoe-ui',
};

export const grid = {
  COLUMN: 24,
  ROW: 24,
};
