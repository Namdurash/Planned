import React from 'react';
import {Text as NativeText, TextStyle} from 'react-native';
import {TextProps} from './Text.types';
import {COLORS} from '../../ui/colors';

export const Text = ({
  children,
  family = 'Montserrat',
  weight = 'Regular',
  size = 14,
  color = COLORS.absoluteBlack,
  customStyles,
  ...props
}: TextProps) => {
  const fonstStyles: TextStyle = {
    fontFamily: `${family}-${weight}`,
    fontSize: size,
    color,
  };

  return (
    <NativeText style={[fonstStyles, customStyles]} {...props}>
      {children}
    </NativeText>
  );
};
