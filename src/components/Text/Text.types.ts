import {TextProps as NativeTextProps, TextStyle} from 'react-native';

export type FontTypes = 'Montserrat' | 'Jost' | 'DancingScript';

export enum FontWeight {
  Thin = 'Thin',
  ExtraLight = 'ExtraLight',
  Light = 'Light',
  Regular = 'Regular',
  Medium = 'Medium',
  SemiBold = 'SemiBold',
  Bold = 'Bold',
  ExtraBold = 'ExtraBold',
  Black = 'Black',
}

export interface TextProps extends NativeTextProps {
  customStyles?: TextStyle;
  family?: FontTypes;
  weight?: keyof typeof FontWeight;
  size?: number;
  color?: string;
}
