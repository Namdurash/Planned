import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {ButtonProps} from './Button.types';
import {styles} from './Button.styles';

export const Button = ({
  text,
  onPress,
  containerStyles,
  textStyles,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyles]}>
      <Text style={[styles.title, textStyles]}>{text}</Text>
    </TouchableOpacity>
  );
};
