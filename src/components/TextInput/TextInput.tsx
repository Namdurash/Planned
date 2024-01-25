import React, {useState} from 'react';
import {
  NativeSyntheticEvent,
  TextInput as NativeTextInput,
  TextInputFocusEventData,
} from 'react-native';
import {TextInputProps} from './TextInput.types';
import {styles} from './TextInput.styles';
import {COLORS} from '../../ui/colors';

export const TextInput = ({
  setText,
  customStyles,
  ...props
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const formattedStyles = isFocused
    ? styles.focusedContainer
    : styles.container;
  const handleOnChangeText = (value: string) => {
    setText(value);
    props.onChangeText?.(value);
  };

  const handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    props.onFocus?.(e);
  };

  const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    props.onBlur?.(e);
  };

  return (
    <NativeTextInput
      onChangeText={handleOnChangeText}
      textAlign="left"
      style={[formattedStyles, customStyles]}
      placeholderTextColor={COLORS.middleGray}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      {...props}
    />
  );
};
