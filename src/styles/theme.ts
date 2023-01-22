import {
  Color,
  FontSize,
  FontWeight,
  Size,
} from '../types/theme';

const color: Color = {
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  SEMI_BLACK: '#111111',
  VERY_LIGHT_GRAY: '#F8F8F8',
  LIGHT_GRAY: '#EBEBEB',
  GRAY: '#DDDDDD',
  DEEP_GRAY_OPACITY: 'rgba(41, 54, 63, 0.5)',
  BLUE: '#218DE9',
};

const fontSize: FontSize = {
  X_SMALL: '12px',
  SMALL: '14px',
  MEDIUM: '16px',
  LARGE: '20px',
  TITLE: '56px',
};

const fontWeight: FontWeight = {
  THIN: 300,
  NORMAL: 400,
  BOLD: 700,
  EXTRA_BOLD: 900,
};

const size: Size = {
  sm: '(max-width: 640px)',
  md: '(max-width: 768px)',
  lg: '(max-width: 1024px)',
  xl: '(max-width: 1280px)',
  xxl: '(max-width: 1536px)',
};

const theme = {
  color,
  fontSize,
  fontWeight,
  size,
};

export default theme;
